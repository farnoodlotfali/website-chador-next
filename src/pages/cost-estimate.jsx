import { SvgSPrite } from "@/Components/SvgSPrite";
import { numberWithCommas } from "@/Utility/utils";
import {
  Box,
  Button,
  Card,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

// Initialize Map
const Map = dynamic(() => import("@/Components/Map"), {
  ssr: false,
});

const COST_ESTIMATE_STEPS = [
  {
    name: "source",
    title: "آدرس مبدأ",
    button: "ثبت مبدأ",
  },
  {
    name: "destination",
    title: "آدرس مقصد",
    button: "ثبت مقصد",
  },
  {
    name: "container",
    title: "نوع بارگیر",
    button: "ثبت بارگیر",
  },
];

const CostEstimate = () => {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [show, setShow] = useState(false);

  const handleStep = () => {
    setStep((prev) => {
      let idx = prev + 1;

      if (idx === COST_ESTIMATE_STEPS.length) {
        setShow(true);
        return;
        // return 0;
      }

      return idx;
    });
  };

  const resetToEstimate = () => {
    setStep(0);
    setShow(false);
  };

  return (
    <>
      <Head>
        <title> چادرملو - تـخـمـیـن بـار </title>
      </Head>

      {show ? (
        <ResultCostEstimate resetToEstimate={resetToEstimate} />
      ) : (
        <Box sx={{ height: "100vh" }}>
          <Map zoom={15}>
            {/* back button */}

            <Box
              sx={{
                position: "fixed",
                top: 30,
                left: 60,
                zIndex: 2,
                bgcolor: "background.paper",
                p: 2,
                display: "flex",
                borderRadius: 2,
                boxShadow: 2,
                cursor: "pointer",
                transition: "all 0.3s",
                ":hover": {
                  filter: "brightness(.95)",
                },
              }}
              onClick={() => router.back()}
            >
              <SvgSPrite icon="arrow-right" />
            </Box>

            <Box
              sx={{
                position: "fixed",
                bottom: 0,
                zIndex: 2,
                left: 0,
                right: 0,
              }}
            >
              <Grid container>
                <Grid item xs={true}></Grid>
                <Grid item md={5} sm={8} xs={12}>
                  <Card
                    sx={{
                      bgcolor: "background.paper",
                      p: 2,
                      borderRadius: 2,
                      borderBottomRightRadius: 0,
                      borderBottomLeftRadius: 0,
                      display: "grid",
                      gap: 1,
                    }}
                  >
                    <FormControl variant="outlined" fullWidth>
                      <OutlinedInput
                        type="text"
                        placeholder={COST_ESTIMATE_STEPS[step].title}
                        // {...register(input.name, { ...input.rules })}
                        // error={!!errors?.[input.name]}
                      />
                      {/* {!!errors?.[input.name] && (
                    <FormHelperText error variant="outlined">
                      {errors?.[input.name]?.message}
                    </FormHelperText>
                  )} */}
                    </FormControl>
                    <Button onClick={handleStep} fullWidth variant="contained">
                      {COST_ESTIMATE_STEPS[step].button}
                    </Button>
                  </Card>
                </Grid>
                <Grid item xs={true}></Grid>
              </Grid>
            </Box>
          </Map>
        </Box>
      )}
    </>
  );
};

const ResultCostEstimate = ({ resetToEstimate }) => {
  const router = useRouter();
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "background.paper",
        textAlign: "center",
      }}
    >
      <Stack spacing={3}>
        <Typography fontWeight={700} color="primary.main" variant="h4">
          نـتـیـجـه تـخـمـیـن بـار
        </Typography>

        <Box
          sx={{
            width: 500,
            display: "grid",
            gap: 2,
          }}
        >
          <Box
            sx={{
              p: 2,
              borderRadius: 2,
              border: "1px solid",
              width: "100%",
              display: "grid",
              gap: 2,
            }}
          >
            <Stack direction="row" justifyContent="space-between">
              <Typography fontWeight={700} variant="body1">
                مسافت
              </Typography>
              <Typography variant="body1">
                {numberWithCommas("1201")} کیلومتر
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography fontWeight={700} variant="body1">
                مدت زمان
              </Typography>
              <Typography variant="body1">
                {numberWithCommas("50")} مدت زمان
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography fontWeight={700} variant="body1">
                هزینه بار
              </Typography>
              <Typography variant="body1">
                {numberWithCommas("5541000")} تومان
              </Typography>
            </Stack>
          </Box>
          <Button
            variant="contained"
            fullWidth
            size="large"
            onClick={() => router.push("/")}
          >
            بازگشت به صفحه اصلی
          </Button>
          <Button
            variant="outlined"
            fullWidth
            size="large"
            onClick={resetToEstimate}
          >
            امتحان مجدد
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default CostEstimate;
