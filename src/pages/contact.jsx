import { PAGE_PADDING } from "@/MUI/theme";
import { enToFaNumber } from "@/Utility/utils";
import { useDevicesSize } from "@/hooks/useDevicesSize";
import PanelLayout from "@/layouts/PanelLayout";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  FormControl,
  FormHelperText,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useForm } from "react-hook-form";

const Map = dynamic(() => import("@/Components/Map"), {
  ssr: false,
});

const Contact = () => {
  const { isTablet } = useDevicesSize();
  const {
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    setValue,
    watch,
    control,
    register,
  } = useForm();

  // inputs
  const DataInputs = [
    {
      type: "text",
      name: "name",
      placeholder: "نام و نام خانوادگی",
      control: control,
      rules: {
        required: "نام و نام خانوادگی را وارد کنید",
      },
    },
    {
      type: "number",
      name: "phone",
      placeholder: "شماره تماس",
      noInputArrow: true,
      control: control,
      rules: {
        required: "شماره تماس را وارد کنید",
      },
    },
    {
      type: "email",
      name: "email",
      placeholder: "ایمیل",
      control: control,
      rules: {
        required: "ایمیل را وارد کنید",
      },
    },
  ];

  // inputs
  const DataInputs1 = [
    {
      type: "textarea",
      name: "name",
      placeholder: "پیام شما",
      control: control,
      rules: {
        required: "پیام را وارد کنید",
      },
      props: {
        inputProps: {
          style: {
            height: "100%",
            minHeight: 100,
          },
        },
        InputProps: {
          style: {
            height: "100%",
          },
        },
        sx: {
          height: "100%",
        },
      },
    },
  ];

  // handle on submit
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Head>
        <title> چادرملو - تماس با ما</title>
      </Head>

      <Box bgcolor="background.paper" px={PAGE_PADDING} py={2 * PAGE_PADDING}>
        <Typography
          color="primary.main"
          component="h1"
          variant="h4"
          fontWeight={700}
          textAlign="center"
          mb={2}
        >
          تماس با ما
        </Typography>
        <Typography variant="h6" textAlign="center" mb={5}>
          برای پیگیری یا سوال درباره سفارش از فرم زیر استفاده کنید
        </Typography>

        {/* form */}

        <Stack direction={{ md: "row", xs: "column" }} spacing={3}>
          <Box width={"100%"}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack direction={{ md: "row", xs: "column" }} spacing={2} mb={3}>
                <Stack spacing={2} width="100%">
                  {DataInputs.map((input, i) => {
                    return (
                      <FormControl variant="outlined" sx={{ mt: 0 }} key={i}>
                        <OutlinedInput
                          type={input.type}
                          placeholder={input.placeholder}
                          {...register(input.name, { ...input.rules })}
                          error={!!errors?.[input.name]}
                        />
                        {!!errors?.[input.name] && (
                          <FormHelperText error variant="outlined">
                            {errors?.[input.name]?.message}
                          </FormHelperText>
                        )}
                      </FormControl>
                    );
                  })}
                </Stack>
                {DataInputs1.map((input, i) => {
                  return (
                    <FormControl variant="outlined" key={i} fullWidth>
                      <OutlinedInput
                        type={input.type}
                        placeholder={input.placeholder}
                        {...register(input.name, { ...input.rules })}
                        error={!!errors?.[input.name]}
                        multiline={input.type === "textarea"}
                        {...input.props}
                      />
                      {!!errors?.[input.name] && (
                        <FormHelperText error variant="outlined">
                          {errors?.[input.name]?.message}
                        </FormHelperText>
                      )}
                    </FormControl>
                  );
                })}
              </Stack>

              <LoadingButton
                variant="contained"
                loading={isSubmitting}
                type="submit"
                fullWidth
                size="large"
                color={Object.keys(errors).length !== 0 ? "error" : "primary"}
              >
                ارسال پیام
              </LoadingButton>
            </form>
          </Box>
          <Box width={"100%"} display={"flex"} flexDirection="column">
            {!isTablet && (
              <Typography
                fontWeight={700}
                fontSize={32}
                color="primary.main"
                textAlign="center"
                my={4}
              >
                دفـتـر مـرکـزی
              </Typography>
            )}
            <Stack
              direction={{ md: "row", xs: "column" }}
              justifyContent="space-between"
              mb={1}
              spacing={{ md: 2, xs: 1 }}
              color="text.primary"
            >
              <Typography>
                خیابان دکتر فاطمی، خیابان باباطاهر، کوچه کیوان، پلاک 19
              </Typography>
              <Typography textAlign="right">
                {enToFaNumber("021-88978284")}
              </Typography>
            </Stack>
            <Box
              sx={{
                height: { md: "100%", xs: 200 },
                width: "100%",
                "& .leaflet-container": {
                  borderRadius: 1.2,
                },
              }}
            >
              <Map zoom={15}></Map>
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  );
};
Contact.PageLayout = PanelLayout;

export default Contact;
