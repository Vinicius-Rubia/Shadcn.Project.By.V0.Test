import { MENU_ITEMS } from "@/constants/menu-items";
import { MenuIcon, PackageIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { AddToCart } from "./add-to-cart";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export const Navbar: React.FC = () => {
  return (
    <div className="h-screen w-full overflow-hidden lg:flex">
      <div className="hidden w-60 border-r border-gray-200/50 dark:border-gray-800/50 lg:block">
        <div className="flex h-full flex-col">
          <div className="flex items-center h-14 px-6 border-b border-gray-200/50 dark:border-gray-800/50">
            <Link
              className="flex items-center gap-2 text-lg font-semibold"
              to="#"
            >
              <PackageIcon className="h-6 w-6" />
              <span className="">acme</span>
            </Link>
          </div>



          <nav className="flex-1 overflow-y-auto">
            <ul className="grid gap-1">
              {MENU_ITEMS.map((child) => (
                <li key={child.key} className="bg-gray-100 p-2 dark:bg-gray-800">
                  {child.children ? (
                    <Accordion className="w-full" collapsible type="single">
                      <AccordionItem value="billing">
                        <AccordionTrigger className="flex w-full items-center gap-4 rounded-lg px-3 py-2 text-sm font-medium">
                          {child.label}
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="grid gap-1">
                            {child.children.map((childSubitem) => (
                              childSubitem.children ? (
                                childSubitem.children.map((childSubitemSub) => (
                                  <li key={childSubitemSub.key} className="p-2">
                                    <Accordion className="w-full" collapsible type="single">
                                      <AccordionItem value="sub-billing">
                                        <AccordionTrigger className="flex w-full items-center gap-4 rounded-lg px-3 py-2 text-sm font-medium">
                                          {childSubitemSub.label}
                                        </AccordionTrigger>
                                        <AccordionContent>
                                          <ul className="grid gap-1">
                                            <li className="p-2">
                                              <Link
                                                className="flex w-full items-center gap-4 rounded-lg px-3 py-2 text-sm font-medium"
                                                to={childSubitemSub.url ?? "/"}>
                                                {childSubitemSub.label}
                                              </Link>
                                            </li>
                                          </ul>
                                        </AccordionContent>
                                      </AccordionItem>
                                    </Accordion>
                                  </li>
                                ))) : (
                              <li key={childSubitem.key} className="p-2">
                                <Link
                                  className="flex w-full items-center gap-4 rounded-lg px-3 py-2 text-sm font-medium"
                                  to={childSubitem.url ?? "/"}
                                >
                                  {childSubitem.label}
                                </Link>
                              </li>
                              )
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <Link
                      className="flex w-full items-center gap-4 rounded-lg px-3 py-2 text-sm font-medium"
                      to={child.url ?? "/"}
                    >
                      {child.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

              {/* <li className="p-2">
                <Accordion className="w-full" collapsible type="single">
                  <AccordionItem value="billing">
                    <AccordionTrigger className="flex w-full items-center gap-4 rounded-lg px-3 py-2 text-sm font-medium">
                      Billing
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="grid gap-1">
                        <li className="p-2">
                          <Link
                            className="flex w-full items-center gap-4 rounded-lg px-3 py-2 text-sm font-medium"
                            to="#"
                          >
                            Invoices
                          </Link>
                        </li>
                        <li className="p-2">
                          <Link
                            className="flex w-full items-center gap-4 rounded-lg px-3 py-2 text-sm font-medium"
                            to="#"
                          >
                            Payments
                          </Link>
                        </li>
                        <li className="p-2">
                          <Accordion
                            className="w-full"
                            collapsible
                            type="single"
                          >
                            <AccordionItem value="sub-billing">
                              <AccordionTrigger className="flex w-full items-center gap-4 rounded-lg px-3 py-2 text-sm font-medium">
                                Sub Invoices
                              </AccordionTrigger>
                              <AccordionContent>
                                <ul className="grid gap-1">
                                  <li className="p-2">
                                    <Link
                                      className="flex w-full items-center gap-4 rounded-lg px-3 py-2 text-sm font-medium"
                                      to="#"
                                    >
                                      Sub Invoice 1
                                    </Link>
                                  </li>
                                  <li className="p-2">
                                    <Link
                                      className="flex w-full items-center gap-4 rounded-lg px-3 py-2 text-sm font-medium"
                                      to="#"
                                    >
                                      Sub Invoice 2
                                    </Link>
                                  </li>
                                  <li className="p-2">
                                    <Accordion
                                      className="w-full"
                                      collapsible
                                      type="single"
                                    >
                                      <AccordionItem value="sub-sub-billing">
                                        <AccordionTrigger className="flex w-full items-center gap-4 rounded-lg px-3 py-2 text-sm font-medium">
                                          Sub-Sub Invoices
                                        </AccordionTrigger>
                                        <AccordionContent>
                                          <ul className="grid gap-1">
                                            <li className="p-2">
                                              <Link
                                                className="flex w-full items-center gap-4 rounded-lg px-3 py-2 text-sm font-medium"
                                                to="#"
                                              >
                                                Sub-Sub Invoice 1
                                              </Link>
                                            </li>
                                            <li className="p-2">
                                              <Link
                                                className="flex w-full items-center gap-4 rounded-lg px-3 py-2 text-sm font-medium"
                                                to="#"
                                              >
                                                Sub-Sub Invoice 2
                                              </Link>
                                            </li>
                                          </ul>
                                        </AccordionContent>
                                      </AccordionItem>
                                    </Accordion>
                                  </li>
                                </ul>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </li>
              <li className="p-2">
                <Link
                  className="flex w-full items-center gap-4 rounded-lg px-3 py-2 text-sm font-medium"
                  to="/deployments"
                >
                  Deployments
                </Link>
              </li>
              <li className="p-2">
                <Link
                  className="flex w-full items-center gap-4 rounded-lg px-3 py-2 text-sm font-medium"
                  to="/settings"
                >
                  Settings
                </Link>
              </li>
              <li className="p-2">
                <Link
                  className="flex w-full items-center gap-4 rounded-lg px-3 py-2 text-sm font-medium"
                  to="/containers"
                >
                  Containers
                </Link>
              </li> */}


        </div>
      </div>
      <div className="flex-1 flex flex-col min-h-0 min-w-0">
        <div className="flex w-full items-center h-14 border-b border-gray-200/50 dark:border-gray-800/50 px-6">
          <MenuIcon className="h-6 w-6 mr-4" />
          <h1 className="text-lg font-semibold">Home</h1>
        </div>
        <main className="flex-1 flex flex-col min-h-0 min-w-0">
          <div className="flex-1 flex flex-col w-full p-6">
            <div className="grid gap-1">
              <h1 className="text-xl font-semibold">Home</h1>
              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Welcome to the acme dashboard.
              </p>
            </div>
            <AddToCart />
          </div>
        </main>
      </div>
    </div>
  );
};
