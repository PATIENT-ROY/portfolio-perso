import { useState } from "react";

export interface FormspreeData {
  name: string;
  email?: string;
  telegram?: string;
  subject: string;
  message: string;
  contactMethod: "email" | "telegram";
}

export const useFormspree = (formId: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendForm = async (data: FormspreeData): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("subject", data.subject);
      formData.append("message", data.message);
      formData.append("contact_method", data.contactMethod);
      
      if (data.email) {
        formData.append("email", data.email);
      }
      if (data.telegram) {
        formData.append("telegram", data.telegram);
      }

      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        return true;
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Ошибка отправки формы");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError(
        err instanceof Error 
          ? err.message 
          : "Произошла ошибка при отправке формы"
      );
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    sendForm,
    isLoading,
    error,
  };
}; 