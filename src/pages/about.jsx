import Features from "@/Components/Features";
import { PAGE_PADDING } from "@/MUI/theme";
import PanelLayout from "@/layouts/PanelLayout";
import { Box, Stack, Typography } from "@mui/material";
import Head from "next/head";

const ABOUT_ITEMS = [
  "این راست نیست که هرچه عاشق‌ تر باشی بهتر درک می‌کنی. همه‌ی آنچه عشق و عاشقی از من می‌ خواهد فقط درکِ این حکمت است: دیگری نشناختنی است؛ ماتیِ او پرده‌ی ابهامی به روی یک راز نیست، بل گواهی است که در آن بازیِ بود و نمود هیچ‌ جایی ندارد. پس من در مسرتِ عشق ورزیدن به یک ناشناس غرق می‌شوم، کسی که تا ابد ناشناس خواهد ماند. سِیری عارفانه: من آن‌چه را نمی‌شناسم می‌شناسم...!",
  "این راست نیست که هرچه عاشق‌ تر باشی بهتر درک می‌کنی. همه‌ی آنچه عشق و عاشقی از من می‌ خواهد فقط درکِ این حکمت است: دیگری نشناختنی است؛ ماتیِ او پرده‌ی ابهامی به روی یک راز نیست، بل گواهی است که در آن بازیِ بود و نمود هیچ‌ جایی ندارد. پس من در مسرتِ عشق ورزیدن به یک ناشناس غرق می‌شوم، کسی که تا ابد ناشناس خواهد ماند. سِیری عارفانه: من آن‌چه را نمی‌شناسم می‌شناسم...!",
  "این راست نیست که هرچه عاشق‌ تر باشی بهتر درک می‌کنی. همه‌ی آنچه عشق و عاشقی از من می‌ خواهد فقط درکِ این حکمت است: دیگری نشناختنی است؛ ماتیِ او پرده‌ی ابهامی به روی یک راز نیست، بل گواهی است که در آن بازیِ بود و نمود هیچ‌ جایی ندارد. پس من در مسرتِ عشق ورزیدن به یک ناشناس غرق می‌شوم، کسی که تا ابد ناشناس خواهد ماند. سِیری عارفانه: من آن‌چه را نمی‌شناسم می‌شناسم...!",
];

const About = () => {
  return (
    <>
      <Head>
        <title> چادرملو - درباره ما</title>
      </Head>

      <Box bgcolor="background.paper" px={PAGE_PADDING} py={PAGE_PADDING}>
        <Typography
          color="primary.main"
          component="h1"
          variant="h4"
          fontWeight={700}
          textAlign="center"
          mb={4}
        >
          دربـاره‌مـا
        </Typography>

        <Stack spacing={3}>
          {ABOUT_ITEMS.map((item, i) => {
            return (
              <Typography lineHeight={1.75} textAlign="justify" key={i}>
                {item}
              </Typography>
            );
          })}
        </Stack>
      </Box>

      <Features />
    </>
  );
};
About.PageLayout = PanelLayout;
export default About;
