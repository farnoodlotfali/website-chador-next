import FAQList from "@/Components/FAQList";
import { PAGE_PADDING, PAGE_PADDING2 } from "@/MUI/theme";
import PanelLayout from "@/layouts/PanelLayout";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Container,
  FormControl,
  FormHelperText,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import Head from "next/head";
import { useForm } from "react-hook-form";

const FAQ = () => {
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
        <title> چادرملو - ســوالات مـتـداول </title>
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
          ســوالات مـتـداول
        </Typography>

        <FAQList />
      </Box>

      <Box
        sx={{
          bgcolor: "background.default",
          overflow: "hidden",
          textAlign: "center",
          py: 7,
          px: { md: 15, xs: PAGE_PADDING2 },
          position: "relative",
          ":after": {
            content: '""',
            position: "absolute",
            width: 200,
            height: 200,
            border: "40px solid",
            borderColor: "primary.200",
            borderRadius: "50%",
            bottom: -90,
            left: -70,
          },
          ":before": {
            content: '""',
            position: "absolute",
            width: 200,
            height: 200,
            border: "40px solid",
            borderColor: "primary.200",
            borderRadius: "50%",
            top: -90,
            right: -80,
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            maxWidth: "sm",
            mx: "auto",
            mb: 4,
          }}
        >
          <Typography
            color="primary.main"
            component="h6"
            variant="h4"
            fontWeight={700}
            textAlign="center"
            mb={2}
          >
            پاسخی برای سوال خود نیافتید؟
          </Typography>
          <Typography variant="h6" component="span">
            شما می‌توانید سوال خود را از کارشناسان ما بپرسید. ما در سریعترین
            زمان ممکن با شما تماس می‌گیریم.
          </Typography>
        </Box>
        <Container maxWidth="sm">
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
        </Container>
      </Box>
    </>
  );
};
FAQ.PageLayout = PanelLayout;

export default FAQ;
