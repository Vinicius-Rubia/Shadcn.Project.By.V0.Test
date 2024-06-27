import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { FrameIcon, Link, MoreHorizontalIcon, PackageIcon, PlusIcon } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Separator } from './ui/separator'

export const Settings: React.FC = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <Link className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4" href="#">
          <FrameIcon className="w-6 h-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Projects
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Deployments
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Analytics
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Logs
          </Link>
          <Link className="font-bold" href="#">
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
        <div className="max-w-6xl w-full mx-auto flex items-center gap-4">
          <form className="flex-1">
            <Input className="bg-white dark:bg-gray-950" placeholder="Search containers..." />
            <Button className="sr-only" type="submit">
              Submit
            </Button>
          </form>
          <Button className="rounded-full" size="icon">
            <PlusIcon className="w-4 h-4" />
            <span className="sr-only">Add container</span>
          </Button>
        </div>
        <div className="max-w-6xl w-full mx-auto grid gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <PackageIcon className="w-8 h-8" />
              <div className="grid gap-1">
                <CardTitle>my-container</CardTitle>
                <CardDescription>My container description</CardDescription>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="ml-auto" size="icon" variant="ghost">
                    <MoreHorizontalIcon className="w-4 h-4" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit Container</DropdownMenuItem>
                  <DropdownMenuItem>Delete Container</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="text-sm font-medium">Start command</div>
              <div className="grid gap-2">
                <div>npm run start</div>
              </div>
              <div className="grid gap-2">
                <div className="text-sm font-medium">Worker Name</div>
                <div>my-container</div>
              </div>
              <Separator />
              <div className="grid gap-2">
                <div className="text-sm font-medium">Allocated Ports</div>
                <div>3000</div>
              </div>
              <Separator />
              <div className="grid gap-2">
                <div className="text-sm font-medium">Resource Limits</div>
                <div>0.1 CPU, 64Mi Memory</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <PackageIcon className="w-8 h-8" />
              <div className="grid gap-1">
                <CardTitle>my-container</CardTitle>
                <CardDescription>My container description</CardDescription>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="ml-auto" size="icon" variant="ghost">
                    <MoreHorizontalIcon className="w-4 h-4" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit Container</DropdownMenuItem>
                  <DropdownMenuItem>Delete Container</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="text-sm font-medium">Start command</div>
              <div className="grid gap-2">
                <div>npm run start</div>
              </div>
              <div className="grid gap-2">
                <div className="text-sm font-medium">Worker Name</div>
                <div>my-container</div>
              </div>
              <Separator />
              <div className="grid gap-2">
                <div className="text-sm font-medium">Allocated Ports</div>
                <div>3000</div>
              </div>
              <Separator />
              <div className="grid gap-2">
                <div className="text-sm font-medium">Resource Limits</div>
                <div>0.1 CPU, 64Mi Memory</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
