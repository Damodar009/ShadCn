import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  Button,
  ThemeSwitcher,
  LangSwitcher,
} from '@shadcn-next-skeleton/shared';
import Link from 'next/link';
export const HeaderNavbar = () => {
  return (
    <NavigationMenu className="items-center justify-between w-full px-6 py-3">
      <NavigationMenuList className="">
        <div className="flex flex-1 gap-8 ">
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink>About</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>{' '}
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink>Contact</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink>Blog</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </div>
      </NavigationMenuList>
      <div className="flex ">
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </NavigationMenu>
  );
};
