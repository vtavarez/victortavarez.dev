"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Moon, Sun, ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../DropdownMenu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="border-2 bg-background shadow-project"
      >
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function ContactButton({ children }: { children: React.ReactNode }) {
  const animation = {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: {
      type: "spring",
      duration: 0.5,
      damping: 10,
      stiffness: 100,
      delay: 1,
    },
  };

  return (
    <motion.div {...animation}>
      <Button
        variant="contact"
        className="shadow-project"
        asChild
      >
        <Link href="#contact">
          {children}{" "}
          <span
            aria-hidden="true"
            className="ml-2"
          >
            <ArrowRight />
          </span>
        </Link>
      </Button>
    </motion.div>
  );
}

export function SubmitButton({
  children,
  ...props
}: {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button
      type="submit"
      variant="outline"
      className="w-full"
      {...props}
    >
      {children}
    </Button>
  );
}
