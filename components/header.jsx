import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarsIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { checkUser } from "@/lib/checkUser";

const Header = async() => {

  await checkUser()

  return (
    <header className="fixed top-0 w-full border-b bg-background/50 backdrop-blur-lg z-40 supports-[backdrop-filter]:bg-background/30">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between ">
        <Link href="/">
          <Image
            className="h-12 py-1 w-auto object-contain"
            src="/logo.png"
            alt="Evolvai"
            width={200}
            height={60}
          />
        </Link>

        <div className="flex items-center space-x-2 md:space-x-4">
          <SignedIn>
            <Link href={"/dashboard"}>
              <Button variant="outline">
                <LayoutDashboard className="h-4 w-4" />
                <span className=" hidden md:block">Industry Insight</span>
              </Button>
            </Link>
          </SignedIn>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button>
                <StarsIcon className="h-4 w-4" />
                <span className=" hidden md:block">Growth Tools</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>


              <DropdownMenuItem>  
                <Link href={"/resume"} className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Build Resume</span>
                </Link>
              </DropdownMenuItem>
              

              <DropdownMenuItem>  
                <Link href={"/coverletter"} className="flex items-center gap-2">
                <PenBox className="h-4 w-4" />
                <span>Cover Letter</span>
                </Link>
              </DropdownMenuItem>


              <DropdownMenuItem>  
                <Link href={"/interview"} className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                <span>Interview Prep</span>
                </Link>
              </DropdownMenuItem>

            </DropdownMenuContent>


          </DropdownMenu>
      <SignedOut>
        <SignInButton>
          <Button variant="outline">Sign in</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton 
        appearance={{
          elements:{
            avatarBox:"w-10 h-10",
            userButtonPopoverCard:"shadow-xl",
            userPreviewMainIdentifier:"font-bold",
          }
        }}
        />
      </SignedIn>
        </div>
      </nav>

    </header>
  );
};

export default Header;
