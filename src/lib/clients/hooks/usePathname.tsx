import { usePathname } from "next/navigation";

export default function useKorPath() {
  const path = usePathname();
  if (path === "/academy") {
    return "학원 관리";
  }
  if (path === "/class") {
    return "수업 관리";
  }
  if (path === "/build") {
    return "소개 관리";
  }
  if (path === "/built") {
    return "받은 소개 관리";
  }
  if (path === "/commission") {
    return "한 소개 수수료";
  }
  if (path === "/fee") {
    return "받은 소개 수수료";
  }
  if (path === "/location") {
    return "지역 관리";
  }
  if (path === "/partners") {
    return "우리 지역 학원";
  }
  if (path === "/cowork") {
    return "협력 관리";
  }
  if (path === "/member") {
    return "회원 관리";
  }
}
