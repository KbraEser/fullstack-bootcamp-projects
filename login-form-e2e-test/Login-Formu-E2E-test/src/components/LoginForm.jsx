import React, { useState, useEffect } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Button,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const STRONG_PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

const getErrors = (form) => {
  const newErrors = {};
  if (!form.email) newErrors.email = "Email gerekli";
  else if (!EMAIL_REGEX.test(form.email))
    newErrors.email = "Geçerli bir email girin";
  if (!form.password) newErrors.password = "Şifre gerekli";
  else if (!STRONG_PASSWORD_REGEX.test(form.password))
    newErrors.password =
      "Şifre en az 8 karakter, büyük harf, küçük harf ve rakam içermelidir";
  if (!form.terms) newErrors.terms = "Koşulları kabul etmelisiniz";
  return newErrors;
};

const LoginForm = () => {
  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center px-3">
      <Form
        className="login-form w-100"
        style={{ maxWidth: "400px" }}
        onSubmit={handleSubmit}
        data-cy="login-form"
      >
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email girin"
            value={form.email}
            onChange={handleChange}
            invalid={!!errors.email}
            data-cy="email-input"
          />
          {errors.email && (
            <FormFeedback data-cy="error-email">{errors.email}</FormFeedback>
          )}
        </FormGroup>

        <FormGroup>
          <Label for="password">Şifre</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Şifre girin"
            value={form.password}
            onChange={handleChange}
            invalid={!!errors.password}
            data-cy="password-input"
          />
          {errors.password && (
            <FormFeedback data-cy="error-password">
              {errors.password}
            </FormFeedback>
          )}
        </FormGroup>

        <FormGroup check>
          <Input
            id="terms"
            name="terms"
            type="checkbox"
            checked={form.terms}
            onChange={handleChange}
            data-cy="terms-checkbox"
          />
          <Label htmlFor="terms" check>
            Şartları kabul ediyorum
          </Label>
          {errors.terms && (
            <span data-cy="error-terms" className="text-danger d-block small">
              {errors.terms}
            </span>
          )}
        </FormGroup>

        <FormGroup className="text-center p-4">
          <Button
            type="submit"
            color="primary"
            disabled={!isValid}
            data-cy="submit-button"
          >
            Giriş Yap
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default LoginForm;
