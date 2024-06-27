import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Item, MENU_ITEMS } from "@/constants/menu-items";
import { ElementType, ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface AccordionItemProps {
  Icon: ElementType | undefined;
  label: string;
}

interface AccordionProps {
  children: ReactNode;
  subItem: boolean;
}

export const Menu: React.FC = () => {
  return (
    <div className="w-[350px]">
      <AccordionComponent subItem={false}>
        {MENU_ITEMS.map((item) => (
          <AccordionItem
            className="flex flex-col gap-2" key={item.key} value={item.key}>
            <AccordionTriggerItem Icon={item.Icon} label={item.label} />

            <AccordionContent>
              <ul className="children flex flex-col gap-3">
                {item.children?.map((child) =>
                  child.children && child.children?.length > 0 ? (
                    <AccordionComponent key={child.key} subItem>
                      <AccordionItem className="flex flex-col gap-2" value={child.key}>
                        <AccordionTriggerItem Icon={item.Icon} label={item.label} />

                        <AccordionContent>
                          <ul className="children flex flex-col gap-3">
                            {child.children.map((subChild) => (
                              <MenuItems key={subChild.key} item={subChild} />
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </AccordionComponent>
                  ) : (
                    <MenuItems item={child} />
                  )
                )}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </AccordionComponent>
    </div>
  );
};

const MenuItems = ({ item }: Item) => {
  return (
    <li>
      <NavLink to={`${item.parentKey}${item.url}`}>
        <div className="flex items-center gap-4 pl-10 py-1 text-[#747474] hover:text-[#aeaeae] duration-200 ease-in-out">
          {item.Icon && <item.Icon className="w-5 h-fit" />}
          <span>{item.label}</span>
        </div>
      </NavLink>
    </li>
  );
};

const AccordionTriggerItem: React.FC<AccordionItemProps> = ({ Icon, label }) => {
  return (
    <AccordionTrigger className="category text-[#747474] duration-200 ease-in-out cursor-pointer">
      <div className="flex items-center w-9 h-full">
        {Icon && <Icon className="w-5 h-fit" />}
      </div>
      <span>{label}</span>
    </AccordionTrigger>
  );
};

const AccordionComponent: React.FC<AccordionProps> = ({ subItem, children }) => {
  const accordionStyle = subItem ? "flex items-center gap-4 pl-10 py-1 text-[#747474] hover:text-[#aeaeae] duration-200 ease-in-out" : "w-full menu-list flex flex-col gap-8"
  return (
    <Accordion type="single" collapsible className={accordionStyle}>
      {children}
    </Accordion>
  );
};

