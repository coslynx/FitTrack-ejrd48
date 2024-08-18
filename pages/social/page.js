"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  SocialLayout,
  PostForm,
  PostCard,
  PostList,
} from "@/components";
import { fetchUserPosts, createPost, deletePost } from "@/lib/posts";

export default function SocialPage() {
  const router = useRouter();
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (session) {
      setIsLoading(true);
      fetchUserPosts(session.user.id)
        .then((data) => {
          setPosts(data);
        })
        .catch((error) => {
          console.error("Error fetching posts:", error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [session]);

  const handleCreatePost = async (newPost) => {
    try {
      setIsLoading(true);
      await createPost(session.user.id, newPost);
      fetchUserPosts(session.user.id)
        .then((data) => {
          setPosts(data);
        })
        .catch((error) => {
          console.error("Error fetching posts:", error);
        });
    } catch (error) {
      console.error("Error creating post:", error);
    } finally {
      setIsLoading(false);
      setShowForm(false);
    }
  };

  const handleDeletePost = async (postId) => {
    try {
      setIsLoading(true);
      await deletePost(postId);
      fetchUserPosts(session.user.id)
        .then((data) => {
          setPosts(data);
        })
        .catch((error) => {
          console.error("Error fetching posts:", error);
        });
    } catch (error) {
      console.error("Error deleting post:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-lg">Please login to access the social feed.</p>
        <button
          onClick={() => router.push("/auth/signin")}
          className="bg-primary text-white px-4 py-2 rounded-md mt-4"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <SocialLayout>
      <div className="flex flex-col gap-6 p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Social Feed</h2>
          <button
            onClick={() => setShowForm(true)}
            className="bg-primary text-white px-4 py-2 rounded-md"
          >
            Create Post
          </button>
        </div>
        {isLoading && (
          <div className="flex justify-center items-center">
            <p className="text-lg">Loading...</p>
          </div>
        )}
        {posts.length > 0 ? (
          <PostList>
            {posts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                onDelete={handleDeletePost}
              />
            ))}
          </PostList>
        ) : (
          <div className="flex justify-center items-center h-full">
            <p className="text-lg">
              No posts yet. Share your first fitness achievement!
            </p>
          </div>
        )}
      </div>
      {showForm && (
        <PostForm onSubmit={handleCreatePost} onClose={handleCloseForm} />
      )}
    </SocialLayout>
  );
}