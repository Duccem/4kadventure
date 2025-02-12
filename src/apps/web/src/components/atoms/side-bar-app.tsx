import React from 'react';
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@4k/ui/components/ui/sidebar';
import Link from 'next/link';
import Locale from './locale';
import logo from '@/src/assets/4k_logo.jpeg'


const SideBarApp = () => {
  return (
    <Sidebar>
      <SidebarHeader >
        <SidebarMenuButton>
          <Link href="/" className="text-center p-3 w-full text-xl font-medium">
            4KADVENTURE
          </Link>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <div className='flex justify-center items-center'>
          <Locale />
        </div>
        <SidebarGroup >
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href={'/destinations'} className="p-3 w-full">

                    <span>Destinations</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href={'/gallery'} className="p-3 w-full">

                    <span>Gallery</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup >
      </SidebarContent>
      <SidebarFooter >
        <div className='flex flex-col items-center justify-center'>
          <div className='w-1/3'>
            <img src={logo.src} alt="" />
          </div>
          <p>
            4KADVENTURE
          </p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

export default SideBarApp;
