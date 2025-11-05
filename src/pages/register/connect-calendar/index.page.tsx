import { Button, Heading, MultiStep, Text } from "@ignite-ui/react";
import { Container, Header } from "../styles";
import { ConnectBox, ConnectItem } from "./styles";
import { ArrowRight } from "phosphor-react";
import { signIn } from "next-auth/react";

export default function ConnectCalendarPage() {
  return (
    <Container>
      <Header>
        <Heading as="strong" size="md">
          Conecte sua agenda!
        </Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep currentStep={2} size={4} />
      </Header>

      <ConnectBox>
        <ConnectItem>
          <Text>Google Agenda</Text>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => signIn("google")}
          >
            Conectar
            <ArrowRight />
          </Button>
        </ConnectItem>
        <Button type="submit" disabled>
          Próximo passo <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  );
}
