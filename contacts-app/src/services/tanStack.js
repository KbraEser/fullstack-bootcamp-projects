import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const useContacts = () => {
  return useQuery({
    queryKey: ['contacts'],
    queryFn: async () => {
      const res = await axios.get(
        'https://65b36193770d43aba479a2f2.mockapi.io/users'
      );
      return res.data;
    },
  });
};

export const useContact = (contactId) => {
  return useQuery({
    queryKey: ['contact', contactId],
    queryFn: async () => {
      const res = await axios.get(
        `https://65b36193770d43aba479a2f2.mockapi.io/users/${contactId}`
      );
      return res.data;
    },
    enabled: !!contactId,
  });
};

export const useDeleteContact = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (contactId) =>
      axios.delete(
        `https://65b36193770d43aba479a2f2.mockapi.io/users/${contactId}`
      ),

    onSuccess: (_data, contactId) => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
      queryClient.invalidateQueries({ queryKey: ['contact', contactId] });
    },
  });
};

export const useAddContact = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      const response = await axios.post(
        `https://65b36193770d43aba479a2f2.mockapi.io/users`,
        data
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['contacts']);
    },
  });
};
