"use client"
import clsx from "clsx"
import styles from "./navigation.module.scss"
import Link from "next/link"
import { menus } from "@/utils/menus"
import { AnimatePresence, motion, useMotionValue } from "framer-motion"
import { usePathname } from "next/navigation"
import { FiAlertCircle } from "react-icons/fi"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const Navigation = () => {
  const pathname = usePathname()

  const y = useMotionValue(0)

  return (
    <>
      <div className="bg-white text-gray-600">
        <div className="container">
          <div className="flex items-center h-[36px] uppercase text-sm">
            <span className="block pr-2">
              <FiAlertCircle size={20} />
            </span>
            <span>
              <span className="hidden sm:inline-block mr-1">
                This site still
              </span>
              under construction. Visit{" "}
              <a href="https://2022-rus.pages.dev">
                <b>old site</b>
              </a>
            </span>
          </div>
        </div>
      </div>
      <nav className={clsx("uppercase", styles.navigation)}>
        <div className="container">
          <div className="flex [&:not(:hover)_.link]:opacity-100 justify-between h-[80px] items-center">
            <div>
              <div className="flex items-center space-x-2">
                <div>
                  <Link
                    className="[&:not(:hover)]:opacity-50 py-[22px] link"
                    href="/"
                  >
                    MR
                  </Link>
                </div>
                <div>
                  <span className="block text-xs border border-gray-600 text-gray-400 px-2 py-1 rounded-lg uppercase">
                    dev
                  </span>
                </div>
              </div>
            </div>
            <div className={clsx("flex", styles.menus)}>
              {menus.map((item, i) => {
                return (
                  <div key={item.id} className="relative px-3 py-1">
                    <Link
                      href={item.path}
                      className="[&:not(:hover)]:opacity-50  link"
                    >
                      <span>{item.label}</span>
                    </Link>
                    <AnimatePresence>
                      {pathname.startsWith(item.path) ? (
                        <motion.div
                          layoutId="underline"
                          initial={y.get() !== 0 ? { y: -10 } : false}
                          animate={false}
                          className={clsx(
                            "h-1 absolute w-full left-0 top-0 rounded-b-lg",
                            styles.underline
                          )}
                        />
                      ) : null}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="uppercase [&:not(:hover)]:opacity-50 link">
                    Menu
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CreditCard className="mr-2 h-4 w-4" />
                      <span>Billing</span>
                      <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Keyboard className="mr-2 h-4 w-4" />
                      <span>Keyboard shortcuts</span>
                      <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Users className="mr-2 h-4 w-4" />
                      <span>Team</span>
                    </DropdownMenuItem>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        <UserPlus className="mr-2 h-4 w-4" />
                        <span>Invite users</span>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem>
                            <Mail className="mr-2 h-4 w-4" />
                            <span>Email</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <MessageSquare className="mr-2 h-4 w-4" />
                            <span>Message</span>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <PlusCircle className="mr-2 h-4 w-4" />
                            <span>More...</span>
                          </DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem>
                      <Plus className="mr-2 h-4 w-4" />
                      <span>New Team</span>
                      <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Github className="mr-2 h-4 w-4" />
                    <span>GitHub</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LifeBuoy className="mr-2 h-4 w-4" />
                    <span>Support</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem disabled>
                    <Cloud className="mr-2 h-4 w-4" />
                    <span>API</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
