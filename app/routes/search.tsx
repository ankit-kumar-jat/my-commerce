import { Form } from "react-router";
import type { Route } from "./+types/search";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { FilterIcon } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Search | My Commerce" },
    {
      name: "description",
      content: "One stop solutions for your shopping.",
    },
  ];
}

export default function Search() {
  return (
    <div className="container mx-auto px-4 my-8">
      <div className="mx-auto max-w-5xl space-y-6">
        <div>
          <Form
            method="GET"
            className="flex justify-center gap-4 max-w-md mx-auto"
          >
            <Input
              type="text"
              placeholder="Start typing to search"
              autoFocus
              name="search"
            />
            <Button type="submit">Search</Button>
          </Form>
        </div>
        <div className="flex justify-between border-b pb-2 flex-wrap md:flex-nowrap gap-2 md:items-center">
          <p className="font-medium">
            <span className="font-bold">25</span> Results found
          </p>
          <div className="flex ml-auto gap-2 items-center">
            <Filters />
            <SortBy />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(10).keys()].map((i) => (
            <div className="w-full border h-64" key={i}></div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SortBy() {
  return (
    <Select defaultValue="recommended">
      <SelectTrigger className="w-[150px] font-medium">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort By</SelectLabel>
          <SelectItem value="recommended">Recommended</SelectItem>
          <SelectItem value="newest">Newest</SelectItem>
          <SelectItem value="lowest-price">Lowest Price</SelectItem>
          <SelectItem value="highest-price">Highest Price</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

function Filters() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          Filters <FilterIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-72 flex flex-col p-0 gap-0">
        <SheetHeader className="p-6 border-b-2 ">
          <SheetTitle className="text-center">Filters</SheetTitle>
        </SheetHeader>
        <div className="py-4 h-full overflow-auto">
          <p>filters goes here</p>
        </div>
        <SheetFooter className="w-full p-6 flex-row space-x-2 mt-auto border-t-2">
          <SheetClose asChild>
            <Button type="submit" variant="outline" className="w-full">
              Clear All
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button type="submit" className="w-full">
              Apply
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
