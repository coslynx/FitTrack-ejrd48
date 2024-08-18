"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Navbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
  NavbarLink,
  NavbarToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@/components/ui/navbar";

export default function Header() {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <Navbar className="sticky top-0 z-50 bg-background border-b border-gray-200">
      <NavbarContent>
        <NavbarBrand>
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg font-semibold">FitTrack</span>
          </Link>
        </NavbarBrand>
        <div className="hidden sm:flex justify-end items-center gap-4">
          {!session ? (
            <>
              <NavbarItem>
                <NavbarLink href="/auth/signin">Login</NavbarLink>
              </NavbarItem>
              <NavbarItem>
                <NavbarLink href="/auth/signup">Signup</NavbarLink>
              </NavbarItem>
            </>
          ) : (
            <>
              <NavbarItem>
                <NavbarLink href="/dashboard">Dashboard</NavbarLink>
              </NavbarItem>
              <NavbarItem>
                <NavbarLink href="/goals">Goals</NavbarLink>
              </NavbarItem>
              <NavbarItem>
                <NavbarLink href="/workouts">Workouts</NavbarLink>
              </NavbarItem>
              <NavbarItem>
                <NavbarLink href="/social">Social</NavbarLink>
              </NavbarItem>
              <NavbarItem>
                <NavbarLink href="/profile">Profile</NavbarLink>
              </NavbarItem>
              <NavbarItem>
                <Button
                  variant="outline"
                  onClick={() => {
                    router.push("/auth/signout");
                  }}
                >
                  Logout
                </Button>
              </NavbarItem>
            </>
          )}
        </div>
        <NavbarToggle />
        <NavbarMenu>
          {!session ? (
            <>
              <NavbarMenuItem>
                <NavbarLink href="/auth/signin">Login</NavbarLink>
              </NavbarMenuItem>
              <NavbarMenuItem>
                <NavbarLink href="/auth/signup">Signup</NavbarLink>
              </NavbarMenuItem>
            </>
          ) : (
            <>
              <NavbarMenuItem>
                <NavbarLink href="/dashboard">Dashboard</NavbarLink>
              </NavbarMenuItem>
              <NavbarMenuItem>
                <NavbarLink href="/goals">Goals</NavbarLink>
              </NavbarMenuItem>
              <NavbarMenuItem>
                <NavbarLink href="/workouts">Workouts</NavbarLink>
              </NavbarMenuItem>
              <NavbarMenuItem>
                <NavbarLink href="/social">Social</NavbarLink>
              </NavbarMenuItem>
              <NavbarMenuItem>
                <NavbarLink href="/profile">Profile</NavbarLink>
              </NavbarMenuItem>
              <NavbarMenuItem>
                <Button
                  variant="outline"
                  onClick={() => {
                    router.push("/auth/signout");
                  }}
                >
                  Logout
                </Button>
              </NavbarMenuItem>
            </>
          )}
        </NavbarMenu>
      </NavbarContent>
    </Navbar>
  );
}