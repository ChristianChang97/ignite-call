/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Button, Heading, MultiStep, Text, TextInput } from "@ignite-ui/react";
import { Container, Form, Header } from "./styles";
import { ArrowRight } from "phosphor-react";

export default function Register() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Bem vindo ao Ignite Call</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil!
          <br />
          Ah, você pode editar essas informações depois.
        </Text>

        <MultiStep size={4} currentStep={1} />
      </Header>

      <Form as="form">
        <label>
          <Text size="sm">Nome de usuário</Text>
          {/* @ts-ignore */}
          <TextInput prefix="ignite.com/" placeholder={"Seu-usuário"} />
        </label>

        <label>
          <Text size="sm">Nome completo</Text>
          {/* @ts-ignore */}
          <TextInput placeholder={"Seu nome"} />
        </label>

        <Button type="submit">
          Próximo passo
          <ArrowRight />
        </Button>
      </Form>
    </Container>
  );
}
