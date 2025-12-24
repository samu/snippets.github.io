import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

export function CookieConsentBanner() {
  const [hasAccepted, setHasAccepted] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem("snip-landing-page-has-accepted");

    if (hasAccepted === "true") {
      setHasAccepted(true);
    }
  }, []);

  return (
    !hasAccepted && (
      <div className={styles.outer}>
        This page uses cookies. By continuing to browse the site, you are
        agreeing to our use of cookies. You can find out more in our privacy
        policy.
        <button
          onClick={() => {
            setHasAccepted(true);
            localStorage.setItem("snip-landing-page-has-accepted", "true");
          }}
        >
          OK
        </button>
      </div>
    )
  );
}
