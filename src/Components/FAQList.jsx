import { PAGE_PADDING, TRANSITION } from "@/MUI/theme";
import { useDevicesSize } from "@/hooks/useDevicesSize";
import {
  Accordion,
  Box,
  Stack,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Card,
} from "@mui/material";
import { useState } from "react";
import { SvgSPrite } from "./SvgSPrite";

const FAQ_ITEMS = [
  {
    question: "فرآیند ثبت‌نام در چادرملو به عنوان “راننده” چگونه است؟",
    answer: "عالی",
  },
  {
    question: "کارمزد بار چگونه محاسبه می‌شود؟",
    answer: "عالی",
  },
  {
    question: "مزیت اصلی سامانه شما چه چیزی است؟",
    answer: "عالی",
  },
  {
    question:
      "نسخه اندروید گوشی من پایین هست، آیا این اپلیکیشن روی اون نصب میشه؟",
    answer: "عالی",
  },
  {
    question: "نقش کیف‌پول در اپلیکیشن چیه؟",
    answer: "عالی",
  },
  {
    question: "فرآیند ثبت‌نام در چادرملو به عنوان “صاحب‌بار” چگونه است؟",
    answer: "عالی",
  },
];

const FAQList = () => {
  const { isTablet } = useDevicesSize();
  const [selected, setSelected] = useState(-1);

  const handleChange = (panel) => (event, selected) => {
    setSelected(selected ? panel : -1);
  };

  return (
    <Box p={PAGE_PADDING}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={2} flex={1}>
          {FAQ_ITEMS.map((item, i) => {
            const expanded = i === selected;
            return (
              <Accordion
                expanded={expanded}
                onChange={handleChange(i)}
                key={i}
                disableGutters
              >
                <AccordionSummary>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    width="100%"
                  >
                    <Typography>{item.question}</Typography>
                    {isTablet ? (
                      <Box
                        sx={{
                          transition: TRANSITION,
                          transform: expanded && "rotateZ(180deg)",
                          height: "fit-content",
                        }}
                      >
                        <SvgSPrite icon="chevron-down" size="small" />
                      </Box>
                    ) : (
                      <Typography color="primary.main" fontWeight={600}>
                        {expanded ? "کمتر" : "بیشتر"}
                      </Typography>
                    )}
                  </Stack>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography> {item.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Stack>

        {isTablet && (
          <Card
            sx={{
              width: "100%",
              height: "auto",
              bgcolor: "secondary.main",
              flex: 0.15,
            }}
          ></Card>
        )}
      </Stack>
    </Box>
  );
};
export default FAQList;
