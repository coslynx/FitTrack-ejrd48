"use client";

import { cn } from "@/lib/utils";
import { Link } from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-16 py-8 px-4 text-center">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} FitTrack. All rights reserved.
        </p>
        <ul className="flex items-center justify-center mt-4 gap-4">
          <li>
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}