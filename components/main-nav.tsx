"use client";

import Image from "next/image";
import * as React from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";

import SmallLogo from "@/assets/apple-touch-icon.png";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function MainNav({ className }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/`,
      label: "Home",
      active: pathname === `/`,
    },
    {
      href: `/services`,
      label: "Services",
      active: pathname === `services`,
    },
    {
      href: `/about`,
      label: "About",
      active: pathname === `/about`,
    },
    {
      href: `/work`,
      label: "Work",
      active: pathname === `/work`,
    },
    // {
    //   href: `/${params.branchId}/settings`,
    //   label: "Services",
    //   active: pathname === `/${params.branchId}/settings`,
    //   submenu: [
    //     {
    //       href: `/${params.branchId}/settings/branch`,
    //       title: "Branch",
    //       label: "Manage branch",
    //       active: pathname === `/${params.branchId}/settings/branch`,
    //     },
    //     {
    //       href: `/${params.branchId}/settings/accounts`,
    //       title: "Accounts",
    //       label: "Manage account settings",
    //       active: pathname === `/${params.branchId}/settings/accounts`,
    //       separator: true,
    //     },
    //     {
    //       href: `/${params.branchId}/settings/employees`,
    //       title: "Employees",
    //       label: "Manage employees",
    //       active: pathname === `/${params.branchId}/settings/branch`,
    //     },
    //     {
    //       href: `/${params.branchId}/settings/departments`,
    //       title: "Departments",
    //       label: "Manage employees departments",
    //       active: pathname === `/${params.branchId}/settings/accounts`,
    //     },
    //   ],
    // },
  ];

  return (
    <NavigationMenu className={cn(className)}>
      <Image
        className="order-1 w-fit mx-auto visible lg:hidden absolute top-8"
        src={SmallLogo}
        alt="Chemicah logo"
      />
      <NavigationMenuList className="flex-col lg:flex-row items-start lg:items-center space-x-0 lg:space-x-2 space-y-3 lg:space-y-0">
        {routes.map((route) => (
          <NavigationMenuItem key={route.href}>
            {route.submenu ? (
              <>
                <NavigationMenuTrigger
                  className={cn(
                    "transition-colors",
                    route.active
                      ? "text-black dark:text-white bg-accent"
                      : "text-muted-foreground"
                  )}
                >
                  {route.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="!mx-auto right-auto">
                  <ul className="grid gap-1 p-2 md:w-[400px] lg:w-[300px]">
                    {route?.submenu.map((submenuItem) => (
                      <>
                        <Link
                          key={submenuItem.href}
                          href={submenuItem.href}
                          legacyBehavior
                          passHref
                        >
                          <ListItem
                            key={submenuItem.href}
                            href={submenuItem.href}
                            title={submenuItem.title}
                            className={cn(
                              "transition-colors",
                              submenuItem.active
                                ? "text-black dark:text-white bg-accent"
                                : "text-muted-foreground"
                            )}
                          >
                            {submenuItem.label}
                          </ListItem>
                        </Link>
                        {submenuItem.separator ? (
                          <Separator className="my-2 px-3" />
                        ) : null}
                      </>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link href={route.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={
                    navigationMenuTriggerStyle() +
                    cn(
                      "transition-colors !text-base bg-transparent hover:text-[#fff] hover:bg-[#80a316] !rounded-full !py-1 h-full",
                      route.active
                        ? "text-[#80a316]"
                        : "text-muted-foreground dark:text-white"
                    )
                  }
                >
                  {route.label}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
