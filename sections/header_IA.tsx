import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  /**
   * @description Logo image
   */
  logo?: ImageWidget;
  /**
   * @description Alternative text for the logo
   */
  logoAlt?: string;
}

export default function Header({
  logo = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
  logoAlt = "Company Logo"
}: Props) {
  return (
    <header className="bg-base-100 p-4">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <Image
            src={logo}
            alt={logoAlt}
            width={100}
            height={200}
            class="object-contain"
          />
        </div>
      </div>
    </header>
  );
}