import {
  CardContainer,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./card";
import type { Post } from "@/lib/types";
import Image from "next/image";

export function Card({ title, media, excerpt, reading_time, author }: Post) {
  return (
    <CardContainer className="border-4 border-primary bg-background shadow-project">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <Image
          src={media}
          alt={title}
          width={400}
          height={300}
        />
      </CardHeader>
      <CardContent>{excerpt}</CardContent>
      <CardFooter>
        <CardDescription className="ml-auto">
          Reading Time: {reading_time}min
          <br />
          {author}
        </CardDescription>
      </CardFooter>
    </CardContainer>
  );
}
