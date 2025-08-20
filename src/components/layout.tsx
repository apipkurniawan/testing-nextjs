import { Toaster } from "lighthouse-ui-react";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="prd-w-full prd-flex prd-flex-col prd-gap-3 prd-p-6">
      {children}

      <Toaster />
    </div>
  );
}
