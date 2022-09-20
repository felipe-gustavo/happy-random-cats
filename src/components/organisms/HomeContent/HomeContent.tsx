import { Button, Skeleton, Typography } from "@mui/material";

import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { HomeContainer, ButtonContainer } from "./HomeContent.style";

import { useAuth } from "@/contexts/Auth/useAuth";
import { CatPicPayload, RandomCatPic } from "@/services/random-cat-pic.service";

export function HomeContent() {
  const [img, setImg] = useState<CatPicPayload>();
  const [isFetching, setFetching] = useState(false);
  const { t } = useTranslation();
  const { user } = useAuth();

  const { url } = img || {};

  const getCapPic = useCallback(async () => {
    setFetching(true);
    try {
      setImg(await RandomCatPic.exec());
    } catch {
      setFetching(false);
    }
  }, []);

  const handleClick = async () => {
    setImg(undefined);
    await getCapPic();
  };

  const handleLoad = () => {
    setFetching(false);
  };

  useEffect(() => {
    getCapPic();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTitle = () =>
    isFetching ? (
      <p>{t("home.waiting_img_desc")}</p>
    ) : (
      <p>{url ? t("home.img_desc") : t("home.img_error")}</p>
    );

  const getImg = () => (
    <>
      {isFetching && (
        <Skeleton variant="rounded" width={500} height={500} animation="wave" />
      )}
      {url && (
        <img
          className={isFetching ? "none-img" : undefined}
          alt={t("home.alt_img")}
          src={url}
          onLoad={handleLoad}
        />
      )}
    </>
  );

  return (
    <HomeContainer>
      <Typography variant="h6">Hello {user?.firstName}!</Typography>
      {getTitle()}
      {getImg()}
      <ButtonContainer>
        <Button variant="outlined" onClick={handleClick}>
          Give me another one!
        </Button>
      </ButtonContainer>
    </HomeContainer>
  );
}
