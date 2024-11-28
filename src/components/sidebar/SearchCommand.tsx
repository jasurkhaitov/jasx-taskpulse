import * as React from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { IoSearch } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { projectNav, searchCommandNav } from "@/util/data";
import { useNavigate } from "react-router-dom";

export function CommandDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      {/* Sidebar Menu Trigger */}
      <SidebarMenuItem onClick={() => setOpen((open) => !open)}>
        <SidebarMenuButton className="w-full" asChild>
          <button className={cn("bg-transparent")}>
            <IoSearch className="mr-1 h-4 w-4" />
            Search
            <SidebarMenuBadge className="font-mono">⌘ K</SidebarMenuBadge>
          </button>
        </SidebarMenuButton>
      </SidebarMenuItem>

      {/* Command Dialog */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        {/* Input Field */}
        <CommandInput placeholder="Type a command or search..." />

        {/* Command List */}
        <CommandList>
          {/* No Results Found */}
          <CommandEmpty>No results found</CommandEmpty>

          {/* Services Section */}
          <CommandGroup heading="Services">
            {searchCommandNav.map((item) => (
              <CommandItem
                key={item.id}
                onSelect={() => navigate(item.url)} // Navigate on Enter
              >
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          {/* Projects Section */}
          <CommandGroup heading="Projects">
            {projectNav.map((item, idx) => (
              <CommandItem
                key={item.id}
                onSelect={() => navigate(item.url)} // Navigate on Enter
              >
                <span>{idx + 1}.</span>
                <span>{item.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
