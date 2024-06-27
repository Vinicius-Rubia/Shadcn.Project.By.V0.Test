import { HeartIcon, StarIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { ScrollArea } from "./ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export const AddToCart: React.FC = () => {
  return (
    <ScrollArea className="h-[calc(100vh-152px)] rounded-md border">
      <Card>
        <CardHeader className="flex flex-row space-y-0 items-start gap-2">
          <div className="grid gap-1">
            <CardTitle>Add to Cart</CardTitle>
            <CardDescription>Ready to checkout?</CardDescription>
          </div>
          <div className="text-3xl ml-auto font-bold">$99</div>
        </CardHeader>
        <CardContent className="flex justify-between gap-6">
          <form className="flex flex-col gap-4 md:gap-6">
            <div className="grid gap-2">
              <Label className="text-base" htmlFor="color">
                Color
              </Label>
              <RadioGroup
                className="flex items-center gap-2"
                defaultValue="black"
                id="color"
              >
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="color-black"
                >
                  <RadioGroupItem id="color-black" value="black" />
                  Black
                </Label>
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="color-white"
                >
                  <RadioGroupItem id="color-white" value="white" />
                  White
                </Label>
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="color-blue"
                >
                  <RadioGroupItem id="color-blue" value="blue" />
                  Blue
                </Label>
              </RadioGroup>
            </div>
            <div className="grid gap-2">
              <Label className="text-base" htmlFor="size">
                Size
              </Label>
              <RadioGroup
                className="flex items-center gap-2"
                defaultValue="m"
                id="size"
              >
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="size-xs"
                >
                  <RadioGroupItem id="size-xs" value="xs" />
                  XS
                </Label>
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="size-s"
                >
                  <RadioGroupItem id="size-s" value="s" />S
                  {"\n                          "}
                </Label>
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="size-m"
                >
                  <RadioGroupItem id="size-m" value="m" />M
                  {"\n                          "}
                </Label>
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="size-l"
                >
                  <RadioGroupItem id="size-l" value="l" />L
                  {"\n                          "}
                </Label>
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="size-xl"
                >
                  <RadioGroupItem id="size-xl" value="xl" />
                  XL
                </Label>
              </RadioGroup>
            </div>
            <div className="grid gap-2">
              <Label className="text-base" htmlFor="quantity">
                Quantity
              </Label>
              <Select defaultValue="1">
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2 lg:flex-row">
              <Button size="lg">Add to cart</Button>
              <Button size="lg" variant="outline">
                <HeartIcon className="w-4 h-4 mr-2" />
                Add to wishlist
              </Button>
            </div>
          </form>
          <div className="grid gap-3 items-start order-1">
            <div className="flex md:hidden items-start">
              <div className="grid gap-4">
                <h1 className="font-bold text-2xl sm:text-3xl">
                  CottonSculpt Prism Tee: The Cozy Chromatic Blend
                </h1>
                <div>
                  <p>60% combed ringspun cotton/40% polyester jersey tee.</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-0.5">
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  </div>
                </div>
              </div>
              <div className="text-4xl font-bold ml-auto">$99</div>
            </div>
            <div className="grid gap-4">
              <img
                alt="Product Image"
                className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                src="https://placehold.co/600x600"
              />
              <div className="hidden md:flex gap-4 items-start">
                <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
                  <img
                    alt="Preview thumbnail"
                    className="aspect-square object-cover"
                    height={100}
                    src="https://placehold.co/100x100"
                    width={100}
                  />
                  <span className="sr-only">View Image 1</span>
                </button>
                <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
                  <img
                    alt="Preview thumbnail"
                    className="aspect-square object-cover"
                    height={100}
                    src="https://placehold.co/100x100"
                    width={100}
                  />
                  <span className="sr-only">View Image 2</span>
                </button>
                <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
                  <img
                    alt="Preview thumbnail"
                    className="aspect-square object-cover"
                    height={100}
                    src="https://placehold.co/100x100"
                    width={100}
                  />
                  <span className="sr-only">View Image 3</span>
                </button>
                <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
                  <img
                    alt="Preview thumbnail"
                    className="aspect-square object-cover"
                    height={100}
                    src="https://placehold.co/100x100"
                    width={100}
                  />
                  <span className="sr-only">View Image 4</span>
                </button>
                <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
                  <img
                    alt="Preview thumbnail"
                    className="aspect-square object-cover"
                    height={100}
                    src="https://placehold.co/100x100"
                    width={100}
                  />
                  <span className="sr-only">View Image 4</span>
                </button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </ScrollArea>
  );
};
