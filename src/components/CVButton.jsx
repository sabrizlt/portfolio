import React, { useState } from "react";

/* La libreria del PDF è pesante: si scarica solo quando serve il CV. */
export default function CVButton({ className }) {
  const [loading, setLoading] = useState(false);

  const download = async () => {
    setLoading(true);
    try {
      const [{ pdf }, { default: CVDocument }] = await Promise.all([
        import("@react-pdf/renderer"),
        import("./CVDocument"),
      ]);
      const blob = await pdf(<CVDocument />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "CV-Sabri-Zaltni.pdf";
      link.click();
      URL.revokeObjectURL(url);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button type="button" onClick={download} disabled={loading} className={className}>
      {loading ? "Preparo il CV…" : "Scarica il CV"}
    </button>
  );
}
