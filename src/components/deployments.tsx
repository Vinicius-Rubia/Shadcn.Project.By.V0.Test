import { Label } from "@/components/ui/label";
import { ArrowLeftIcon, FrameIcon, Link, PackageIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export const Deployements: React.FC = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <Link
          className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4"
          href="#"
        >
          <FrameIcon className="w-6 h-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Projects
          </Link>
          <Link className="font-bold" href="#">
            Deployments
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Analytics
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Logs
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Settings
          </Link>
        </nav>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <Button className="rounded-full ml-auto" size="icon" variant="ghost">
            <img
              alt="Avatar"
              className="rounded-full border"
              height="32"
              src="/placeholder.svg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] bg-gray-100/40 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 dark:bg-gray-800/40">
        <div className="max-w-6xl w-full mx-auto flex flex-col gap-4">
          <div className="grid gap-2">
            <Link
              className="flex items-center gap-2 text-lg font-semibold sm:text-base"
              href="#"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              <span className="sr-only">Back to Projects</span>
              Projects
            </Link>
            <h1 className="font-semibold text-3xl">Container</h1>
          </div>
          <div className="grid gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <PackageIcon className="w-8 h-8" />
                <div className="grid gap-1">
                  <CardTitle>Container</CardTitle>
                  <CardDescription>example.com</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <div className="grid gap-1">
                    <Label htmlFor="docker-image">Docker Image</Label>
                    <Input defaultValue="mhart/alpine-node" id="docker-image" />
                  </div>
                  <div className="grid gap-1">
                    <Label htmlFor="startup-command">Startup Command</Label>
                    <Input defaultValue="npm start" id="startup-command" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <div className="grid gap-1">
                    <Label htmlFor="worker-name">Worker Name</Label>
                    <Input defaultValue="web" id="worker-name" />
                  </div>
                  <div className="grid gap-1">
                    <Label htmlFor="allocated-ports">Allocated Ports</Label>
                    <Input defaultValue="3000" id="allocated-ports" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <div className="grid gap-1">
                    <Label htmlFor="environment-variables">
                      Environment Variables
                    </Label>
                    <Textarea
                      className="min-h-[100px]"
                      id="environment-variables"
                      placeholder="VAR1=value1&#10;VAR2=value2"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <div className="grid gap-1">
                    <Label htmlFor="environment-variables">
                      Environment Variables
                    </Label>
                    <Textarea
                      className="min-h-[100px]"
                      id="environment-variables"
                      placeholder="VAR1=value1&#10;VAR2=value2"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button size="lg">Save</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};
