"use client"
import {ReactNode,FC} from 'react'
import { QueryClient,
    QueryClientProvider, } from '@tanstack/react-query'
  
    
    //???? why did we create this interface to use it 
    interface ProvidersProps{
        children:ReactNode;
    }
    
      // Create a client
    const queryClient = new QueryClient();

const Providers:FC<ProvidersProps> = ({children}) => {
  return (
    <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
  )
}

export default Providers