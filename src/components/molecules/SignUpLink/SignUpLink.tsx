import { useTranslation } from "react-i18next";

import { LinkContainer } from "./SignUpLink.style";

export function SignUpLink() {
  const { t } = useTranslation();
  return (
    <LinkContainer dangerouslySetInnerHTML={{ __html: t("login.sign_up") }} />
  );
}
