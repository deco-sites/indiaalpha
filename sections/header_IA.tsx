import { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
  /**
   * @description Logo image
   */
  logo?: ImageWidget;
  /**
   * @description Alternative text for the logo
   */
  logoAlt?: string;
  /**
   * @description Background color of the header
   * @format color-input
   */
  backgroundColor?: string;
}

export default function Header({
  logo = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
  logoAlt = "Company Logo",
  backgroundColor = "#ffffff"
}: Props) {
  return (
    <header class="p-4" style={{ backgroundColor, height: "30px" }}>
      <div class="container mx-auto px-4 h-full flex items-center">
        <img
          src={logo}
          alt={logoAlt}
          class="w-[100px] h-[200px] object-contain"
          style={{ marginTop: "100px" }}
        />
      </div>
    </header>
  );
}