
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Cadastro</CardTitle>
          <CardDescription>Crie sua conta para acessar o dashboard.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="seu@email.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Número de WhatsApp</Label>
            <Input id="phone" type="tel" placeholder="+5511999999999" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full">Criar Conta</Button>
          <p className="text-sm text-center text-muted-foreground">
            Já tem uma conta?{' '}
            <Link href="/login" className="font-medium underline" prefetch={false}>
              Login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
