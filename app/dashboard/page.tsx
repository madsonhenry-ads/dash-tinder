
'use client'

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardPage() {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Hardcoded for now. This will come from user session later.
  const userPhoneNumber = '+5511999999999'; 

  useEffect(() => {
    const fetchPhoto = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/whatsapp-photo?phone=${encodeURIComponent(userPhoneNumber)}`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Falha ao buscar a foto.');
        }
        const data = await response.json();
        setPhotoUrl(data.profilePictureUrl);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPhoto();
  }, [userPhoneNumber]);

  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Meu Perfil</h1>
      </div>
      <div className="flex flex-1 items-start justify-start rounded-lg border border-dashed shadow-sm p-6">
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>Foto de Perfil do WhatsApp</CardTitle>
                <CardDescription>Esta é a foto de perfil associada ao seu número.</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center p-6">
                {loading ? (
                    <Skeleton className="h-32 w-32 rounded-full" />
                ) : error ? (
                    <div className="text-center text-red-500">
                        <p>Ocorreu um erro:</p>
                        <p className='text-sm'>{error}</p>
                    </div>
                ) : (
                    <Avatar className="h-32 w-32">
                        <AvatarImage src={photoUrl || ''} alt="Foto do perfil" />
                        <AvatarFallback>N/A</AvatarFallback>
                    </Avatar>
                )}
            </CardContent>
        </Card>
      </div>
    </>
  );
}
