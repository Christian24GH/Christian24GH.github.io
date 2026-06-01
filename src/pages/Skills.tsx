import type { IconType } from "react-icons";
import {
  FaLaravel,
  FaPhp,
  FaReact,
  FaCss3,
  FaJs,
  FaHtml5,
  FaBootstrap,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";

function Icon({
  component: Component,
  size = 24,
}: {
  component: IconType;
  size?: number;
}) {
  return <Component size={size} className="text-white" />;
}
export default function Skills() {
  return (
    <>
      <div className="w-full min-h-[100vh] h-auto flex flex-wrap items-center justify-center gap-32 p-32 ps-32">
        <Icon component={FaHtml5} size={94} />
        <Icon component={FaCss3} size={94} />
        <Icon component={FaJs} size={94} />
        <Icon component={FaReact} size={94} />
        <Icon component={FaBootstrap} size={94} />
        <Icon component={RiTailwindCssFill} size={94} />
        <Icon component={FaPhp} size={94} />
        <Icon component={FaLaravel} size={94} />
        <Icon component={SiMysql} size={94} />
      </div>
    </>
  );
}
