"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoPlay from "embla-carousel-autoplay";
import messages from "@/messages.json";
import { Mail } from "lucide-react";

const Home = () => {
  return (
    <>
      <main className="grow flex flex-col items-center justify-center px-4 md:px-24 py-12 bg-gray-800 text-white">
        <section className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold">
            Dive into the World of Anonymous Conversation
          </h1>
          <p className="mt-3 md:mt-4 text-base md:text-lg">
            Explore Mystery Message - Where your identity remains a secret
          </p>
        </section>
        <Carousel
          plugins={[AutoPlay({ delay: 2000 })]}
          className="w-140 sm:max-w-s"
        >
          <CarouselContent>
            {messages.map((message, index) => (
              <CarouselItem key={index} className="pt-1">
                <Card className="rounded-lg px-2 py-5">
                  <CardHeader>
                    <CardTitle className="text-gray-900 text-2xl font-semibold">{message.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-4">
                    <Mail className="shrink-0 text-gray-900" />
                    <div>
                      <p className="text-gray-900">{message.content}</p>
                      <p className="text-xs text-gray-400">
                        {message.received}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </main>
      {/* Footer */}
      <footer className="text-center p-4 md:p-6 bg-gray-900 text-white">
        © 2026 Mystery Message. All rights reserved.
      </footer>
    </>
  );
};

export default Home;
