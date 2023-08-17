const { PAGE_PADDING, TRANSITION } = require("@/MUI/theme");
const { numberWithCommas } = require("@/Utility/utils");
const { Box, Typography, Grid, Card, Stack } = require("@mui/material");
const { SvgSPrite } = require("./SvgSPrite");

const FEATURES_ITEMS = [
  {
    icon: "truck-front",
    title: "25,000+ ناوگان",
    text: "چادرملو با دسترسی به بیش از 25 هزار ناوگان به عنوان بزرگترین سامانه هوشمند حمل و نقل بار حمل و نقل در کشور است.",
  },
  {
    icon: "globe-pointer",
    title: "اعلام بار اینترنتی",
    text: "صاحبان کالا باربری‌ها و متصدیان حمل بار در هرزمان و مکان میتوانند در سامانه اعلام بار چادرملو، ایران پاسخگوی طیف وسیعی از نیازهای صنعت ثبت بار کنند.",
  },
  {
    icon: "shield-check",
    title: "تضمین امنیت کالا",
    text: "چادرملو با ارائه بارنامه و بیمه کامل بار همکاری با رانندگان حرفهای تامین ناوگان سالم و ارائه خدمات پشتیبانی قوی سلامت و امنیت محموله های ارسالی را تضمین می‌کند",
  },
  {
    icon: "truck-container",
    title: "مدیریت حمل بار",
    text: "پنل هوشمند مدیریت به صاحبان کالا متصدیان و شرکت‌های ،باربری در تسهیل و تسریع روند حمل و نقل و مدیریت کالا کمک می‌کند.",
  },
  {
    icon: "ticket-simple",
    title: "نوبت‌گیری اینترنتی",
    text: "امکان را برای رانندگان فراهم کرده تا بتوانند با انتخاب یک بار همزمان بار مسیر برگشت و یا مبدا دلخواه خود را رزرو کنند.",
  },
  {
    icon: "circle-dollar",
    title: "مقرون به صرفه",
    text: "چادرملو با هدف توسعه صنعت حمل و حفظ حقوق کلیه ذینفعان با فراهم نمودن دسترسی رایگان به سامانه ثبت و اعلام بار و حذف هزینه های اضافی هم به افزایش درآمد رانندگان و..",
  },
];

const Features = () => {
  return (
    <Box
      sx={{
        p: PAGE_PADDING,
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
        ویــژگــی‌هــا
      </Typography>

      <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={3}>
        {FEATURES_ITEMS.map((item, i) => {
          return (
            <Card
              key={i}
              sx={{
                p: 4,
                width: { sm: 450, xs: 320 },
                textAlign: "center",
                height: { sm: 335, xs: "100%" },
                transition: TRANSITION,
                cursor: "default",
                "& .icon": {
                  color: "primary.main",
                },
                "& .box-circle": {
                  bgcolor: "primary.light",
                },

                ":hover": {
                  bgcolor: "primary.main",
                  color: (theme) => theme.palette.common.white,
                  "& p, & .icon": {
                    color: (theme) => theme.palette.common.white,
                  },
                  "& .box-circle": {
                    bgcolor: "primary.dark",
                  },
                },
              }}
            >
              <Grid container spacing={2.5} justifyContent="space-between">
                <Grid item xs={12}>
                  <Box
                    className="box-circle"
                    sx={{
                      transition: TRANSITION,
                      borderRadius: 100,
                      p: { sm: 3.2, xs: 2 },
                      display: "flex",
                      width: { sm: 88, xs: 60 },
                      height: { sm: 88, xs: 60 },
                      justifyContent: "center",
                      alignItems: "center",
                      mx: "auto",
                    }}
                  >
                    <SvgSPrite
                      icon={item.icon}
                      color="inherit"
                      size="100%"
                      className="icon"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" component="span" fontWeight={700}>
                    {numberWithCommas(item.title)}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    component="p"
                    typography={{ md: "body1", xs: "subtitle1" }}
                    color={(theme) =>
                      theme.palette.mode === "light" ? "grey.600" : "grey.500"
                    }
                  >
                    {item.text}
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          );
        })}
      </Stack>

      {/* <Grid container spacing={3}>
        {FEATURES_ITEMS.map((item) => {
          return (
            <Grid item md={4} sm={6} xs={12}>
              <Card
                sx={{
                  p: 4,
                  textAlign: "center",
                  height: "100%",
                  transition: TRANSITION,
                  cursor: "default",
                  "& .icon": {
                    color: "primary.main",
                  },
                  "& .box-circle": {
                    bgcolor: "primary.light",
                  },

                  ":hover": {
                    bgcolor: "primary.main",
                    color: (theme) => theme.palette.common.white,
                    "& p, & .icon": {
                      color: (theme) => theme.palette.common.white,
                    },
                    "& .box-circle": {
                      bgcolor: "primary.dark",
                    },
                  },
                }}
              >
                <Grid container spacing={2.5} justifyContent="space-between">
                  <Grid item xs={12}>
                    <Box
                      className="box-circle"
                      sx={{
                        transition: TRANSITION,
                        borderRadius: 100,
                        p: { sm: 3.2, xs: 2 },
                        display: "flex",
                        width: { sm: 88, xs: 50 },
                        height: { sm: 88, xs: 50 },
                        justifyContent: "center",
                        alignItems: "center",
                        mx: "auto",
                      }}
                    >
                      <SvgSPrite
                        icon={item.icon}
                        color="inherit"
                        size="100%"
                        className="icon"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6" component="span" fontWeight={700}>
                      {numberWithCommas(item.title)}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography component="p" color="grey.600">
                      {item.text}
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          );
        })}
      </Grid> */}
    </Box>
  );
};

export default Features;
