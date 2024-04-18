import { usePathname } from "next/navigation";

interface IPathMap {
  [key: string]: string;
  "/academy": string;
  "/class": string;
  "/build": string;
  "/built": string;
  "/commission": string;
  "/fee": string;
  "/location": string;
  "/partners": string;
  "/cowork": string;
  "/member": string;
}

const pathMap: IPathMap = {
  "/academy": "학원 관리",
  "/class": "수업 관리",
  "/build": "소개 관리",
  "/built": "받은 소개 관리",
  "/commission": "한 소개 수수료",
  "/fee": "받은 소개 수수료",
  "/location": "지역 관리",
  "/partners": "우리 지역 학원",
  "/cowork": "협력 관리",
  "/member": "회원 관리",
};

export default function useKorPath() {
  const path = usePathname();
  return pathMap[path] ?? "";
}
