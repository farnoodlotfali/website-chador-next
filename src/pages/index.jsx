import FAQList from "@/Components/FAQList";
import Features from "@/Components/Features";
import { SvgSPrite } from "@/Components/SvgSPrite";
import { PAGE_PADDING, PAGE_PADDING2, PAGE_RESPONSIVE } from "@/MUI/theme";
import { AppContext } from "@/context/AppContext";
import { useDevicesSize } from "@/hooks/useDevicesSize";
import PanelLayout from "@/layouts/PanelLayout";
import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Card,
  Divider,
  Fade,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import imageURL from "../../public/Assets/images/Screens.svg";

const Home = () => {
  const { toggleTheme } = useContext(AppContext);
  return (
    <>
      <Head>
        <title> چادرملو - صفحه اصلی</title>
      </Head>

      {/* <HeroSection />
      <Button fullWidth variant="outlined" onClick={toggleTheme}>
        toggleTheme
      </Button> */}
      <AboutSite />
      <Features />
      <AppSection />
      <FAQList />
      <LastSection />
    </>
  );
};

const AppSection = () => {
  const { isTablet, isMobile } = useDevicesSize();
  return (
    <Box
      sx={{
        p: PAGE_RESPONSIVE,
        bgcolor: "background.paper",
      }}
    >
      <Typography
        variant="h4"
        component="h5"
        color="primary.main"
        fontWeight={700}
        textAlign="center"
        mb={5}
      >
        بـخـش‌هـای اپـلـیـکـیـشـن
      </Typography>

      <Grid container spacing={3}>
        <Grid item lg={5} xs={12}>
          <Card
            sx={{
              bgcolor: "primary.main",
              px: 3,
              pt: 3,
              boxShadow: 0,
              overflow: "hidden",
              position: "relative",
              ":before": {
                content: '""',
                position: "absolute",
                width: 300,
                height: 300,
                border: "55px solid",
                borderColor: "primary.light",
                opacity: 0.1,
                borderRadius: "50%",
                bottom: -140,
                left: -115,
              },
            }}
          >
            <Stack
              direction="row"
              color="common.white"
              justifyContent={{ sm: "space-between", xs: "center" }}
              flexWrap={{ md: "nowrap", xs: "wrap" }}
              gap={2}
            >
              <Box>
                <Typography
                  fontWeight={700}
                  component="h4"
                  variant="h4"
                  lineHeight={1.5}
                  fontSize={{ sm: 32, xs: 20 }}
                >
                  ثبت آگهی
                  {isTablet && <br />} راحت و سریع!
                </Typography>
                <Box
                  sx={{
                    bgcolor: "primary.dark",
                    py: 1,
                    px: 1.5,
                    borderRadius: 2,
                    height: "fit-content",
                    width: "fit-content",
                    float: "right",
                    mt: 1,
                    fontSize: { sm: 20, xs: 12 },
                  }}
                >
                  صاحب بار
                </Box>
              </Box>
              <Box
                sx={{
                  position: "relative",
                  minHeight: { md: 300, sm: 250, xs: 150 },
                  width: { md: 300, sm: 150, xs: 150 },
                  "& img": {
                    display: "flex",
                    margin: "auto",
                    zIndex: 2,
                    objectFit: "contain",
                  },
                }}
              >
                <Image src="./Assets/images/Ad.svg" fill />
              </Box>
            </Stack>
          </Card>
        </Grid>

        <Grid item lg={7} xs={12}>
          <Card
            sx={{
              bgcolor: (theme) =>
                theme.palette.mode === "light" ? "grey.50" : "grey.800",
              px: 3,
              pt: 3,
              overflow: "hidden",
              position: "relative",
              boxShadow: 0,
              ":before": {
                content: '""',
                position: "absolute",
                width: 300,
                height: "100%",
                border: "55px solid",
                borderColor: "grey.400",
                opacity: 0.1,
                borderRadius: "50%",
                top: 0,
                bottom: 0,
                left: -162,
              },
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent={{ sm: "space-between", xs: "center" }}
              flexWrap={{ md: "nowrap", xs: "wrap" }}
              gap={2}
            >
              <Typography
                fontWeight={700}
                component="h4"
                variant="h4"
                lineHeight={1.75}
                fontSize={{ md: 32, sm: 24, xs: 20 }}
              >
                هـرلـحـظه از {isMobile && <br />}
                وضعیت بـار
                {isMobile && <br />} بـاخـبـر باش
              </Typography>

              <Box
                sx={{
                  position: "relative",
                  minHeight: { sm: 300, xs: 200 },
                  width: { sm: 300, xs: 200 },
                  "& img": {
                    display: "flex",
                    margin: "auto",
                    zIndex: 2,
                    objectFit: "contain",
                  },
                }}
              >
                <Image src="./Assets/images/loan.svg" fill />
              </Box>
            </Stack>
          </Card>
        </Grid>

        <Grid item lg={7} xs={12} order={{ lg: 3, xs: 4 }}>
          <Card
            sx={{
              bgcolor: (theme) =>
                theme.palette.mode === "light" ? "grey.50" : "grey.800",
              px: 3,
              pt: 3,
              overflow: "hidden",
              position: "relative",
              boxShadow: 0,
              ":before": {
                content: '""',
                position: "absolute",
                width: 300,
                height: "100%",
                border: "55px solid",
                borderColor: "grey.400",
                opacity: 0.1,
                borderRadius: "50%",
                top: 0,
                bottom: 0,
                right: -162,
              },
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent={{ sm: "space-between", xs: "center" }}
              flexWrap={{ md: "nowrap", xs: "wrap" }}
              gap={2}
            >
              <Box
                sx={{
                  position: "relative",
                  minHeight: { md: 300, sm: 250, xs: 200 },
                  width: { md: 300, sm: 150, xs: 200 },
                  "& img": {
                    display: "flex",
                    margin: "auto",
                    zIndex: 2,
                    objectFit: "contain",
                  },
                }}
              >
                <Image src="./Assets/images/loan.svg" fill />
              </Box>

              <Typography
                fontWeight={700}
                component="h4"
                variant="h4"
                lineHeight={1.75}
                fontSize={{ md: 32, sm: 24, xs: 20 }}
              >
                دیگه نگران{isMobile && <br />} پـیـداشـدن {isMobile && <br />}
                بـــار نـبـاش
              </Typography>
            </Stack>
          </Card>
        </Grid>
        <Grid item lg={5} xs={12} order={{ lg: 4, xs: 3 }}>
          <Card
            sx={{
              bgcolor: "secondary.main",
              px: 3,
              pt: 3,
              boxShadow: 0,
              overflow: "hidden",
              position: "relative",
              ":before": {
                content: '""',
                position: "absolute",
                width: 300,
                height: 300,
                border: "55px solid",
                borderColor: "secondary.light",
                opacity: 0.1,
                borderRadius: "50%",
                top: -140,
                left: -115,
              },
            }}
          >
            <Stack
              direction="row"
              color="common.white"
              justifyContent={{ sm: "space-between", xs: "center" }}
              flexWrap={{ md: "nowrap", xs: "wrap" }}
              gap={2}
            >
              <Box
                sx={{
                  alignItems: "end",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "end",
                  pb: 3,
                }}
              >
                <Box
                  sx={{
                    bgcolor: "secondary.dark",
                    py: 1,
                    px: 1.5,
                    borderRadius: 2,
                    height: "fit-content",
                    width: "fit-content",
                    float: "right",
                    mb: 1,
                    fontSize: { sm: 20, xs: 12 },
                  }}
                >
                  رانـنـده
                </Box>
                <Typography
                  fontWeight={700}
                  component="h4"
                  variant="h4"
                  lineHeight={1.5}
                  fontSize={{ sm: 32, xs: 20 }}
                >
                  اطلاعات کامل <br />و بـدون نقـص
                </Typography>
              </Box>
              <Box
                sx={{
                  position: "relative",
                  minHeight: { md: 300, sm: 250, xs: 150 },
                  width: { md: 300, sm: 150, xs: 150 },
                  "& img": {
                    display: "flex",
                    margin: "auto",
                    zIndex: 2,
                    objectFit: "contain",
                  },
                }}
              >
                <Image src="./Assets/images/Screen 1.svg" fill />
              </Box>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

const LastSection = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: (theme) => theme.palette.common.white,
        py: 4,
        px: { md: 12, xs: PAGE_PADDING2 },
        overflow: "hidden",
        position: "relative",
        ":after": {
          content: '""',
          position: "absolute",
          width: 200,
          height: 200,
          border: "30px solid",
          borderColor: "primary.light",
          opacity: 0.1,
          borderRadius: "50%",
          bottom: { md: -125, xs: -140 },
          left: { md: -100, xs: 115 },
        },
        ":before": {
          content: { md: '""', xs: "none" },
          position: "absolute",
          width: 200,
          height: 200,
          border: "30px solid",
          borderColor: "primary.light",
          opacity: 0.1,
          borderRadius: "50%",
          top: -140,
          right: -100,
        },
      }}
    >
      <Stack
        direction={{ md: "row", xs: "column" }}
        justifyContent="space-between"
        spacing={3}
        textAlign={{ md: "start", xs: "center" }}
      >
        <Box>
          <Typography fontWeight={700} variant="h5" component="h6">
            هنوز برای استفاده از چـادرمـلـو تردید داریــد؟!
          </Typography>
          <Typography mt={1}>
            شما می‌تـوانید با مشخص کردن مبدا و مقصد و وزن بار خود تخمین هزینه
            چـادرمـلـو را در لحظه مشاهده کنید.
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{ whiteSpace: "nowrap", zIndex: 2 }}
            size="large"
          >
            تخمین هزینه بار
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

const AboutSite = () => {
  const theme = useTheme();
  const { isTablet } = useDevicesSize();
  return (
    <Box
      sx={{
        p: PAGE_PADDING,
        backgroundImage: `url("./Assets/images/Pattern.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        bgcolor: "background.default",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack
            direction={{ md: "row", xs: "column" }}
            spacing={3}
            alignItems="center"
          >
            <Typography
              variant="h3"
              component="h4"
              color="primary.main"
              fontWeight={700}
              whiteSpace="nowrap"
            >
              دربـاره چـادرمـلـو
            </Typography>

            <Divider
              sx={{
                minHeight: { md: 130, xs: 0 },
                borderColor: (theme) => `${theme.palette.primary.main}30`,
                borderWidth: 1,
              }}
              orientation="vertical"
              flexItem
            />
            <Typography
              component="p"
              variant="body1"
              textAlign="justify"
              color="text.primary"
              lineHeight={1.75}
            >
              شرکت معدنی و صنعتی چادرملو در خرداد ماه 1371 تحت شماره 2257 در
              دفتر ثبت شرکتهای شهرستان یزد به ثبت رسیده است. سپس به موجب مصوبه
              مجمع عمومی فوق العاده مورخ 16/8/1377 مرکز شرکت به تهران منتقل و به
              شماره 145857 در اداره کل ثبت شرکتها و موسسات غیر تجاری تهران به
              ثبت رسیده است. <br />
              دفتر مرکزی شرکت در تهران، خیابان ولیعصر بالاتر از ظفر، بلوار
              اسفندیار، پلاک 66 واقع است و شرکت فاقد شعبه می باشد. مجتمع معدنی و
              صنعتی چادرملو در استان یزد، 180 کیلومتری شمال شرقی شهر یزد، حاشیه
              کویر ساغند قرار دارد.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction={{ md: "row", xs: "column" }} spacing={3} mt={2}>
            <Card
              sx={{
                p: 4,
                flex: 1,
                bgcolor: "primary.main",
                color: (theme) => theme.palette.common.white,
              }}
            >
              <Grid container spacing={3}>
                <Grid
                  item
                  xs={12}
                  md={6}
                  justifyContent={{ md: "flex-start", xs: "center" }}
                  display="flex"
                >
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    alignItems="center"
                    display="flex"
                    fontSize={{ md: "inherit", xs: 20 }}
                  >
                    {isTablet && (
                      <SvgSPrite
                        icon="box"
                        color="inherit"
                        sxStyles={{
                          mr: 2,
                        }}
                      />
                    )}
                    صــاحـب بــار
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  justifyContent={{ md: "flex-end", xs: "center" }}
                  display="flex"
                  order={{ md: 2, xs: 3 }}
                >
                  <Button
                    endIcon={
                      <SvgSPrite
                        icon="arrow-down"
                        color="inherit"
                        size="small"
                      />
                    }
                    variant="contained"
                    color="primary"
                    sx={{
                      bgcolor: "primary.dark",
                      boxShadow: 0,
                    }}
                  >
                    دانلود اپ راننده
                  </Button>
                </Grid>
                <Grid item xs={12} order={{ md: 3, xs: 2 }}>
                  <Typography textAlign="justify">
                    تجار، بازرگانان ترخیص کاران ،کارخانجات واحدهای صنعتی و
                    تولیدی معادن شرکتها، سازمانها و اشخاص میتوانند در سامانه حمل
                    بار بارستان کلیه محموله های خود را به راحتی با بهترین قیمت و
                    در کوتاه‌ترین زمان ممکن در سراسر کشور ارسال و دریافت کنند
                  </Typography>
                </Grid>
              </Grid>
            </Card>

            <Card
              sx={{
                p: 4,
                flex: 1,
                bgcolor: "secondary.main",
                color: (theme) => theme.palette.common.white,
              }}
            >
              <Grid container spacing={3}>
                <Grid
                  item
                  xs={12}
                  md={6}
                  justifyContent={{ md: "flex-start", xs: "center" }}
                  display="flex"
                >
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    alignItems="center"
                    display="flex"
                    fontSize={{ md: "inherit", xs: 20 }}
                  >
                    {isTablet && (
                      <SvgSPrite
                        icon="steering-wheel"
                        color="inherit"
                        sxStyles={{
                          mr: 2,
                        }}
                      />
                    )}
                    رانــنــده
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  justifyContent={{ md: "flex-end", xs: "center" }}
                  display="flex"
                  order={{ md: 2, xs: 3 }}
                >
                  <Button
                    endIcon={
                      <SvgSPrite
                        icon="arrow-down"
                        color="inherit"
                        size="small"
                      />
                    }
                    variant="contained"
                    color="secondary"
                    sx={{
                      bgcolor: "secondary.dark",
                      boxShadow: 0,
                    }}
                  >
                    دانلود اپ راننده
                  </Button>
                </Grid>
                <Grid item xs={12} order={{ md: 3, xs: 2 }}>
                  <Typography textAlign="justify">
                    رانندگان کامیون تریلی و کلیه ماشینهای سنگین با استفاده از
                    اپلیکیشن در هر زمان و هر مکان میتوانند از میان هزاران بار
                    اعلام شده در سراسر ایران مسیر دلخواه و محموله مناسب با
                    کامیون خود را انتخاب کنند.
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

const HERO_ITEMS = [
  {
    header: "یه تیتر جذاب و چند کلمه‌ای",
    text: "توضیح کوتاه و مختصر در مورد تیتر و ترغیب برای کلیک بر روی دکمه و دعوت به اقدام",
    button: "دانلود اپ صاحب بار",
    img: imageURL,
    color: "primary",
  },
  {
    header: "یه تیتر جذاب و چند کلمه‌ای",
    text: "توضیح کوتاه و مختصر در مورد تیتر و ترغیب برای کلیک بر روی دکمه و دعوت به اقدام",
    button: "دانلود اپ راننده",
    img: imageURL,
    color: "secondary",
  },
];

const HeroSection = () => {
  const { setHeaderColor, headerColor } = useContext(AppContext);
  const [activeHero, setactiveHero] = useState(
    HERO_ITEMS.findIndex((item) => item.color === headerColor)
  );
  const [showFade, setShowFade] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setactiveHero((prev) => {
        let active;
        if (prev === HERO_ITEMS.length - 1) {
          active = 0;
        } else {
          active = prev + 1;
        }

        setShowFade(false);

        setTimeout(() => {
          setHeaderColor(HERO_ITEMS[active].color);
          setShowFade(true);
        }, 200);

        return active;
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Fade in={showFade} timeout={300}>
      <Box
        sx={{
          bgcolor: `${HERO_ITEMS[activeHero].color}.main`,
          color: (theme) => theme.palette.common.white,
          p: PAGE_PADDING,
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item md={6} xs={12}>
            <Typography
              variant="h2"
              fontSize={{ md: 48, xs: 24 }}
              fontWeight={800}
              component="h1"
            >
              {HERO_ITEMS[activeHero].header}
            </Typography>
            <Typography
              fontSize={{ md: 24, xs: 16 }}
              component="h3"
              fontWeight={400}
              mt={2}
              sx={{ textWrap: "balance" }}
            >
              {HERO_ITEMS[activeHero].text}
            </Typography>

            <Button
              endIcon={
                <SvgSPrite icon="arrow-down" color="inherit" size="small" />
              }
              variant="contained"
              color={HERO_ITEMS[activeHero].color}
              sx={{
                mt: 5,
                bgcolor: `${HERO_ITEMS[activeHero].color}.dark`,
                boxShadow: 0,
              }}
              size="large"
            >
              {HERO_ITEMS[activeHero].button}
            </Button>
          </Grid>
          <Grid item md={6} xs={12} display="flex" justifyContent="flex-end">
            <Box
              sx={{
                position: "relative",
                margin: "100px 50px",
                display: "inline-block",
              }}
            >
              <Box
                sx={{
                  width: 400,
                  height: 400,
                  borderRadius: 100,
                  bgcolor: `${HERO_ITEMS[activeHero].color}.dark`,
                }}
              />
              <img
                src={imageURL}
                style={{
                  transform: "rotate(0deg)",
                  width: 400,
                  marginLeft: -180,
                  position: "absolute",
                  zIndex: 1,
                  bottom: 0,
                  // left: "50%",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  zIndex: 2,
                  left: 0,
                  top: 200,
                  width: 400,
                  height: 210,
                  backgroundImage: (theme) =>
                    `-webkit-radial-gradient(50% 0%, circle closest-corner, transparent 0, transparent 200px, ${
                      theme.palette?.[HERO_ITEMS[activeHero].color].main
                    } 201px, ${
                      theme.palette?.[HERO_ITEMS[activeHero].color].main
                    } 102px)`,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Fade>
  );
};

Home.PageLayout = PanelLayout;
export default Home;
