"use client";

import Layout from "@/components/layout";
import { Input } from "lighthouse-ui-react";
import { useState } from "react";

import "lighthouse-ui-react/dist/style.css";
import "tailwindcss/tailwind.css";

export default function Testing() {
  const [curr, setCurr] = useState<number>();
  const [num, setNum] = useState<string>("");
  const [val, setVal] = useState<string>("");

  return (
    <Layout>
      <Input
        label="Label Currency"
        inputStyle="outline"
        placeholder="Placeholder"
        value={curr}
        onChangeCurrency={(e) => setCurr(e)}
        requiredNode={
          <span className="prd-ml-1 prd-text-sm prd-font-semibold prd-text-oceanV2-error-500">
            *
          </span>
        }
        description="huhus skljd sdkldsdkljshd kshldkj"
        maxLength={15}
        regex={{
          type: "currency",
        }}
      />
      <Input
        label="Label String"
        inputStyle="outline"
        placeholder="Placeholder"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        requiredNode={
          <span className="prd-ml-2 prd-text-sm prd-font-normal prd-text-oceanV2-neutral-600">
            (opsioanl)
          </span>
        }
        sizeField="Large"
      />
      <Input
        label="Label Number"
        inputStyle="outline"
        placeholder="Placeholder"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        requiredNode={
          <span className="prd-ml-2 prd-text-sm prd-font-normal prd-text-oceanV2-neutral-600">
            (opsioanl)
          </span>
        }
        regex={{
          type: "number",
        }}
        sizeField="Large"
      />
    </Layout>
  );
}
