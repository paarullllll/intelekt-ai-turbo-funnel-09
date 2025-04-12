import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Play, ChevronDown, Phone, User } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast } from "@/hooks/use-toast";

type FormValues = {
  name: string;
  phoneNo: string;
};

const HeroSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      phoneNo: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);

    console.log(data);

    const postData = {
      ...data,
      callProjectId: "8a7cb98a-37f9-462d-89cc-44a7ca814a07",
    };

    // TODO: Validate phone number
    if (!/^\+\d{10,14}$/.test(data.phoneNo)) {
      toast({
        title: "Error",
        description: "Invalid phone number format.",
      });
      setIsSubmitting(false);
      return;
    }

    // TODO: Send request to API
    fetch(
      "https://oapis.getintelekt.ai/v1/api/onboarding/get-a-call-for-project",
      // "http://localhost:2337/v1/api/onboarding/get-a-call-for-project",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.statusCode === 404) {
          toast({
            title: "Error",
            description: "Something went wrong, please try again later.",
          });
          setIsSubmitting(false);
        } else {
          toast({
            title: "Call Requested",
            description: `Thanks ${postData.name}, we'll call you at ${postData.phoneNo} shortly.`,
          });
          form.reset();
          setIsSubmitting(false);
        }
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "Error",
          description: "Something went wrong, please try again later.",
        });
        form.reset();
        setIsSubmitting(false);
      });
  };

  const scrollToNextSection = () => {
    const caseStudySection = document.getElementById("case-study");
    if (caseStudySection) {
      caseStudySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="relative pt-20 md:pt-28 lg:pt-32 pb-10 md:pb-0 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-intelekt-primary via-intelekt-primary to-intelekt-background z-0"></div>

      {/* Animated background grid */}
      <div
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMjIxQUEiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgOGgydjJoLTJ2LTJ6bTIwLTIwaDJ2MmgtMnYtMnptLTIgNGgydjJoLTJ2LTJ6bTQtOGgtMnYyaDJ2LTJ6bTIgMGgydjJoLTJ2LTJ6bS00IDhoMnYyaC0ydi0yem0yLTRoMnYyaC0ydi0yem0yIDhoMnYyaC0ydi0yem0tNCAxMmgydjJoLTJ2LTJ6bTAgOGgydjJoLTJ2LTJ6bS00LTEyaDJ2MmgtMnYtMnptMC04aDJ2MmgtMnYtMnptLTggMTZoMnYyaC0ydi0yem0tOCAwaDJ2MmgtMnYtMnptOC04aDJ2MmgtMnYtMnptLTgtOGgydjJoLTJ2LTJ6bS04IDhoMnYyaC0ydi0yem0wIDhoMnYyaC0ydi0yen0iLz48L2c+PC9nPjwvc3ZnPg==')]
          opacity-70 z-0"
      ></div>

      {/* Accent circles */}
      <div className="absolute -left-32 bottom-0 w-64 h-64 rounded-full bg-intelekt-accent/10 blur-3xl opacity-30"></div>
      <div className="absolute -right-32 top-1/3 w-80 h-80 rounded-full bg-intelekt-cta/10 blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-12">
          {/* Left content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="w-full lg:w-3/5 space-y-6 md:space-y-8"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-block px-6 py-3 rounded-full bg-intelekt-accent/20 border border-intelekt-accent/30 text-xl font-medium text-white mb-2 transform transition-transform hover:scale-105"
            >
              Deployed in a day, results in 7.
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-3xl md:text-[42px] font-bold leading-tight text-gradient tracking-normal"
            >
              How Rupeeq increased their MQL to SQL conversions by 80% using
              Intelekt AI Voice Agents
            </motion.h1>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 md:gap-5 pt-4 md:pt-6"
            >
              <Button
                size="custom"
                className={cn(
                  "bg-intelekt-cta hover:bg-intelekt-cta/90 text-intelekt-primary",
                  "text-lg px-6 md:px-8 font-medium rounded-xl",
                  "transition-all duration-300 shadow-lg",
                  "hover:shadow-intelekt-cta/20 hover:shadow-xl transform hover:-translate-y-1"
                )}
                onClick={() =>
                  window.open(
                    "https://calendly.com/getintelekt-sales/30min",
                    "_blank"
                  )
                }
              >
                Book a Demo
              </Button>

              <Button
                variant="outline"
                size="custom"
                className={cn(
                  "border-white/20 hover:bg-white/5 text-white",
                  "text-lg px-6 md:px-8 rounded-xl",
                  "inline-flex items-center gap-3",
                  "transition-all duration-300 hover:border-white/30 transform hover:-translate-y-1"
                )}
                onClick={() =>
                  window.open(
                    "https://youtu.be/KXA5DYefLJc?si=by0MwmvoXLmXjPId",
                    "_blank"
                  )
                }
              >
                <Play className="h-5 w-5" />
                Watch How It Works
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp} className="pt-6 md:pt-2">
              <p className="text-sm text-white/70 mb-4">
                Trusted by digital-first lenders across India
              </p>
              <div className="flex flex-wrap gap-6 md:gap-8 items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="h-9 w-28 flex items-center rounded-[4px]"
                >
                  <img
                    src="/assets/image-1.png"
                    alt="Image 1"
                    className="rounded-[4px] grayscale"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="h-9 w-28 flex items-center rounded-[4px]"
                >
                  <img
                    src="/assets/image-2.png"
                    alt="Image 2"
                    className="rounded-[4px] grayscale"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="h-9 w-28 flex items-center rounded-[4px]"
                >
                  <img
                    src="/assets/image-3.png"
                    alt="Image 3"
                    className="rounded-[4px] grayscale"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="h-9 w-28 flex items-center rounded-[4px]"
                >
                  <img
                    src="/assets/image-4.png"
                    alt="Image 4"
                    className="rounded-[4px] grayscale"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="h-9 w-28 flex items-center rounded-md"
                >
                  <img
                    src="/assets/image.png"
                    alt="Image 5"
                    className="rounded-[4px] grayscale"
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Interactive card only */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full lg:w-2/5 flex justify-center lg:justify-end relative"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
                boxShadow: [
                  "0 10px 30px rgba(18, 33, 170, 0.2)",
                  "0 20px 40px rgba(18, 33, 170, 0.4)",
                  "0 10px 30px rgba(18, 33, 170, 0.2)",
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              }}
              className="bg-gradient-to-br from-intelekt-primary/80 to-intelekt-primary/40 
                      backdrop-blur-md border border-white/10 rounded-xl py-6 px-8 
                      hover:shadow-intelekt-cta/20 transform hover:-translate-y-1 transition-all duration-300
                      w-full max-w-sm"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white mb-2">
                  See our AI voice agent in action
                </h3>
                <div className="w-full h-0.5 bg-gradient-to-r from-intelekt-accent/50 to-intelekt-cta/50"></div>
              </div>

              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <div className="flex items-center">
                    <User className="h-4 w-4 text-intelekt-cta mr-2" />
                    <Label htmlFor="name" className="text-white/90 text-sm">
                      Your Name
                    </Label>
                  </div>
                  <Input
                    id="name"
                    {...form.register("name", { required: true })}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-intelekt-cta/50 focus:ring-intelekt-cta/30 h-12"
                    placeholder="John Doe"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-intelekt-cta mr-2" />
                    <Label htmlFor="phone" className="text-white/90 text-sm">
                      Phone Number
                    </Label>
                  </div>
                  <Input
                    id="phone"
                    {...form.register("phoneNo", { required: true })}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-intelekt-cta/50 focus:ring-intelekt-cta/30 h-12"
                    placeholder="+91 98765 43210"
                    type="tel"
                    disabled={isSubmitting}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full bg-intelekt-cta hover:bg-intelekt-cta/90 text-intelekt-primary",
                    "text-sm font-medium h-9 rounded-lg",
                    "transition-all duration-300",
                    "flex items-center justify-center h-12",
                    isSubmitting && "opacity-70"
                  )}
                >
                  {isSubmitting ? "Calling..." : "Request Demo Call"}
                </Button>
              </form>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="flex flex-col items-center animate-bounce cursor-pointer mt-20"
          onClick={scrollToNextSection}
        >
          <span className="text-white/60 text-sm mb-2">
            Scroll to learn more
          </span>
          <ChevronDown className="h-6 w-6 text-white/60" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
