import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, Calendar, ChevronRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { AppointmentCard } from '@/components/AppointmentCard';
import { ConsultationCard } from '@/components/ConsultationCard';
const projects = [
  {
    id: 1,
    title: 'Modern Residential Complex',
    category: 'Residential',
    imageUrl: 'https://rqxpdjistljirrpgomtb.supabase.co/storage/v1/object/sign/nakshewale/images/projects/1/WhatsApp%20Image%202025-05-12%20at%2014.07.57_a35b130c.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzU2NTczMmQzLTBiZTEtNGVlZi05M2Y5LWUyM2M5Y2EwYmM1MCJ9.eyJ1cmwiOiJuYWtzaGV3YWxlL2ltYWdlcy9wcm9qZWN0cy8xL1doYXRzQXBwIEltYWdlIDIwMjUtMDUtMTIgYXQgMTQuMDcuNTdfYTM1YjEzMGMuanBnIiwiaWF0IjoxNzQ3MjAxMjgxLCJleHAiOjQ5MDA4MDEyODF9.R3Z9A5lGOr464KIsr6Qo8Kyc6nG59sX0Ti-s5mjwsZg',
    description: 'A contemporary residential complex featuring sustainable materials and innovative design.',
    slug: 'modern-residential-complex',
    details: {
      date: 'January 2023',
      fullDescription: 'This modern residential complex represents our commitment to creating living spaces that balance aesthetics with functionality. Featuring 45 units ranging from studio apartments to three-bedroom residences, the complex integrates sustainable building materials and energy-efficient systems throughout. The design incorporates abundant natural light, versatile communal spaces, and a cohesive relationship with the surrounding landscape.',
      images: [
        'https://rqxpdjistljirrpgomtb.supabase.co/storage/v1/object/sign/nakshewale/images/projects/1/WhatsApp%20Image%202025-05-12%20at%2014.07.57_a35b130c.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzU2NTczMmQzLTBiZTEtNGVlZi05M2Y5LWUyM2M5Y2EwYmM1MCJ9.eyJ1cmwiOiJuYWtzaGV3YWxlL2ltYWdlcy9wcm9qZWN0cy8xL1doYXRzQXBwIEltYWdlIDIwMjUtMDUtMTIgYXQgMTQuMDcuNTdfYTM1YjEzMGMuanBnIiwiaWF0IjoxNzQ3MjAxMjgxLCJleHAiOjQ5MDA4MDEyODF9.R3Z9A5lGOr464KIsr6Qo8Kyc6nG59sX0Ti-s5mjwsZg',
        'https://rqxpdjistljirrpgomtb.supabase.co/storage/v1/object/sign/nakshewale/images/projects/1/WhatsApp%20Image%202025-05-12%20at%2014.07.58_2abd071b.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzU2NTczMmQzLTBiZTEtNGVlZi05M2Y5LWUyM2M5Y2EwYmM1MCJ9.eyJ1cmwiOiJuYWtzaGV3YWxlL2ltYWdlcy9wcm9qZWN0cy8xL1doYXRzQXBwIEltYWdlIDIwMjUtMDUtMTIgYXQgMTQuMDcuNThfMmFiZDA3MWIuanBnIiwiaWF0IjoxNzQ3MjAxNzI4LCJleHAiOjQ5MDA4MDE3Mjh9.N4OJKng8s_rrLJLXAu-AGMCvwo1_LEL6DMHfkCzv75k',
        'https://rqxpdjistljirrpgomtb.supabase.co/storage/v1/object/sign/nakshewale/images/projects/1/WhatsApp%20Image%202025-05-12%20at%2014.07.58_e49a3496.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzU2NTczMmQzLTBiZTEtNGVlZi05M2Y5LWUyM2M5Y2EwYmM1MCJ9.eyJ1cmwiOiJuYWtzaGV3YWxlL2ltYWdlcy9wcm9qZWN0cy8xL1doYXRzQXBwIEltYWdlIDIwMjUtMDUtMTIgYXQgMTQuMDcuNThfZTQ5YTM0OTYuanBnIiwiaWF0IjoxNzQ3MjAxNzg4LCJleHAiOjQ5MDA4MDE3ODh9.r1hb4n_qM-ndUH_eP1ndi1O-ouOEabZ5n7ykfp-hxoc'
      ]
    }
  },
  {
    id: 2,
    title: 'Corporate Headquarters',
    category: 'Commercial',
    imageUrl: 'https://rqxpdjistljirrpgomtb.supabase.co/storage/v1/object/sign/nakshewale/images/projects/2/Screenshot%202025-05-13%20225317.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzU2NTczMmQzLTBiZTEtNGVlZi05M2Y5LWUyM2M5Y2EwYmM1MCJ9.eyJ1cmwiOiJuYWtzaGV3YWxlL2ltYWdlcy9wcm9qZWN0cy8yL1NjcmVlbnNob3QgMjAyNS0wNS0xMyAyMjUzMTcucG5nIiwiaWF0IjoxNzQ3MjAxMzA3LCJleHAiOjQ5MDA4MDEzMDd9.TO39TPFvskBFRgA1gNTMvCBteNhoTs0MqrRbx_7AsNM',
    description: 'An award-winning corporate headquarters that combines functionality with striking aesthetics.',
    slug: 'corporate-headquarters',
    details: {
      date: 'March 2022',
      fullDescription: 'This corporate headquarters was designed to reflect the innovative spirit of our client while providing a functional workspace that enhances collaboration and productivity. The building features a striking glass facade that maximizes natural light while minimizing solar gain. The interior spaces are organized around a central atrium that serves as both a visual anchor and a gathering space for employees and visitors.',
      images: [
        'https://rqxpdjistljirrpgomtb.supabase.co/storage/v1/object/sign/nakshewale/images/projects/2/Screenshot%202025-05-13%20225317.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzU2NTczMmQzLTBiZTEtNGVlZi05M2Y5LWUyM2M5Y2EwYmM1MCJ9.eyJ1cmwiOiJuYWtzaGV3YWxlL2ltYWdlcy9wcm9qZWN0cy8yL1NjcmVlbnNob3QgMjAyNS0wNS0xMyAyMjUzMTcucG5nIiwiaWF0IjoxNzQ3MjAxMzA3LCJleHAiOjQ5MDA4MDEzMDd9.TO39TPFvskBFRgA1gNTMvCBteNhoTs0MqrRbx_7AsNM',
        'https://rqxpdjistljirrpgomtb.supabase.co/storage/v1/object/sign/nakshewale/images/projects/2/Screenshot%202025-05-13%20225505.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzU2NTczMmQzLTBiZTEtNGVlZi05M2Y5LWUyM2M5Y2EwYmM1MCJ9.eyJ1cmwiOiJuYWtzaGV3YWxlL2ltYWdlcy9wcm9qZWN0cy8yL1NjcmVlbnNob3QgMjAyNS0wNS0xMyAyMjU1MDUucG5nIiwiaWF0IjoxNzQ3MjAxODUwLCJleHAiOjQ5MDA4MDE4NTB9.P6ZeVOxmNHNstLT3MorZsLFBfQx3Oc9GVE0Tb0YM7LY'
      ]
    }
  },
  {
    id: 3,
    title: 'Urban Renewal Project',
    category: 'Urban Planning',
    imageUrl: 'https://rqxpdjistljirrpgomtb.supabase.co/storage/v1/object/sign/nakshewale/images/projects/3/WhatsApp%20Image%202025-05-12%20at%2014.06.36_ac882480.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzU2NTczMmQzLTBiZTEtNGVlZi05M2Y5LWUyM2M5Y2EwYmM1MCJ9.eyJ1cmwiOiJuYWtzaGV3YWxlL2ltYWdlcy9wcm9qZWN0cy8zL1doYXRzQXBwIEltYWdlIDIwMjUtMDUtMTIgYXQgMTQuMDYuMzZfYWM4ODI0ODAuanBnIiwiaWF0IjoxNzQ3MjAxMzMyLCJleHAiOjQ5MDA4MDEzMzJ9.uX2h0tgpoPokmvbUNsGz25nM1qgpFyLBmNXd4yU6q60',
    description: 'Transforming urban spaces into vibrant, sustainable community hubs.',
    slug: 'urban-renewal-project',
    details: {
      date: 'July 2021',
      fullDescription: 'This urban renewal project transformed an underutilized industrial area into a vibrant mixed-use district that serves as a hub for community activities, commerce, and culture. The master plan preserves several historic industrial buildings while introducing new structures that complement the existing urban fabric. Public spaces, including parks, plazas, and pedestrian corridors, weave through the development to create a cohesive and accessible environment.',
      images: [
        'https://rqxpdjistljirrpgomtb.supabase.co/storage/v1/object/sign/nakshewale/images/projects/3/WhatsApp%20Image%202025-05-12%20at%2014.06.36_ac882480.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzU2NTczMmQzLTBiZTEtNGVlZi05M2Y5LWUyM2M5Y2EwYmM1MCJ9.eyJ1cmwiOiJuYWtzaGV3YWxlL2ltYWdlcy9wcm9qZWN0cy8zL1doYXRzQXBwIEltYWdlIDIwMjUtMDUtMTIgYXQgMTQuMDYuMzZfYWM4ODI0ODAuanBnIiwiaWF0IjoxNzQ3MjAxMzMyLCJleHAiOjQ5MDA4MDEzMzJ9.uX2h0tgpoPokmvbUNsGz25nM1qgpFyLBmNXd4yU6q60',
      ]
    }
  },
  {
    id: 4,
    title: 'Guest House Commercial',
    category: 'Commercial',
    imageUrl: 'https://rqxpdjistljirrpgomtb.supabase.co/storage/v1/object/sign/nakshewale/images/projects/3/WhatsApp%20Image%202025-05-12%20at%2014.06.36_bbf87b29.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzU2NTczMmQzLTBiZTEtNGVlZi05M2Y5LWUyM2M5Y2EwYmM1MCJ9.eyJ1cmwiOiJuYWtzaGV3YWxlL2ltYWdlcy9wcm9qZWN0cy8zL1doYXRzQXBwIEltYWdlIDIwMjUtMDUtMTIgYXQgMTQuMDYuMzZfYmJmODdiMjkuanBnIiwiaWF0IjoxNzQ3MjAxMzY4LCJleHAiOjQ5MDA4MDEzNjh9.92aMNZ7MGmcSvJ4RqiIIefzGC9pWKPxMUMpljYMrPSs',
    description: 'A comfortable guest house with strong commercial appeal.',
    slug: 'guest-house-commercial',
    details: {
      date: 'November 2022',
      fullDescription: 'This guest house commercial project was designed to provide comfortable accommodations while maintaining a strong commercial appeal. The architecture blends modern aesthetics with functional spaces to create an inviting atmosphere for guests.',
      images: [
        'https://rqxpdjistljirrpgomtb.supabase.co/storage/v1/object/sign/nakshewale/images/projects/3/WhatsApp%20Image%202025-05-12%20at%2014.06.36_bbf87b29.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzU2NTczMmQzLTBiZTEtNGVlZi05M2Y5LWUyM2M5Y2EwYmM1MCJ9.eyJ1cmwiOiJuYWtzaGV3YWxlL2ltYWdlcy9wcm9qZWN0cy8zL1doYXRzQXBwIEltYWdlIDIwMjUtMDUtMTIgYXQgMTQuMDYuMzZfYmJmODdiMjkuanBnIiwiaWF0IjoxNzQ3MjAxMzY4LCJleHAiOjQ5MDA4MDEzNjh9.92aMNZ7MGmcSvJ4RqiIIefzGC9pWKPxMUMpljYMrPSs',
      ]
    }
  },
  {
    id: 5,
    title: 'Modern Residential Complex',
    category: 'Residential',
    imageUrl: 'https://rqxpdjistljirrpgomtb.supabase.co/storage/v1/object/sign/nakshewale/images/projects/3/WhatsApp%20Image%202025-05-12%20at%2014.06.37_7b72a57a.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzU2NTczMmQzLTBiZTEtNGVlZi05M2Y5LWUyM2M5Y2EwYmM1MCJ9.eyJ1cmwiOiJuYWtzaGV3YWxlL2ltYWdlcy9wcm9qZWN0cy8zL1doYXRzQXBwIEltYWdlIDIwMjUtMDUtMTIgYXQgMTQuMDYuMzdfN2I3MmE1N2EuanBnIiwiaWF0IjoxNzQ3MjAxMzg5LCJleHAiOjQ5MDA4MDEzODl9.eh2hLpuGJp_vx4-IQdDDV8Lco_P2veLlu_biS5tJai4',
    description: 'A contemporary residential complex featuring sustainable materials and innovative design.',
    slug: 'modern-residential-complex',
    details: {
      date: 'November 2022',
      fullDescription: 'This guest house commercial project was designed to provide comfortable accommodations while maintaining a strong commercial appeal. The architecture blends modern aesthetics with functional spaces to create an inviting atmosphere for guests.',
      images: [
        'https://rqxpdjistljirrpgomtb.supabase.co/storage/v1/object/sign/nakshewale/images/projects/3/WhatsApp%20Image%202025-05-12%20at%2014.06.37_7b72a57a.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzU2NTczMmQzLTBiZTEtNGVlZi05M2Y5LWUyM2M5Y2EwYmM1MCJ9.eyJ1cmwiOiJuYWtzaGV3YWxlL2ltYWdlcy9wcm9qZWN0cy8zL1doYXRzQXBwIEltYWdlIDIwMjUtMDUtMTIgYXQgMTQuMDYuMzdfN2I3MmE1N2EuanBnIiwiaWF0IjoxNzQ3MjAxMzg5LCJleHAiOjQ5MDA4MDEzODl9.eh2hLpuGJp_vx4-IQdDDV8Lco_P2veLlu_biS5tJai4',
      ]
    }
  },
  {
    id: 6,
    title: 'Corporate Headquarters',
    category: 'Commercial',
    imageUrl: 'https://rqxpdjistljirrpgomtb.supabase.co/storage/v1/object/sign/nakshewale/images/projects/real/WhatsApp%20Image%202025-05-13%20at%2021.37.04_5ac71100.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzU2NTczMmQzLTBiZTEtNGVlZi05M2Y5LWUyM2M5Y2EwYmM1MCJ9.eyJ1cmwiOiJuYWtzaGV3YWxlL2ltYWdlcy9wcm9qZWN0cy9yZWFsL1doYXRzQXBwIEltYWdlIDIwMjUtMDUtMTMgYXQgMjEuMzcuMDRfNWFjNzExMDAuanBnIiwiaWF0IjoxNzQ3MjAxNTExLCJleHAiOjQ5MDA4MDE1MTF9.habJSusNjomQ5ePF9gQHhyN8TzxI7buiUsqUClgNtA8',
    description: 'An award-winning corporate headquarters that combines functionality with striking aesthetics.',
    slug: 'corporate-headquarters',
    details: {
      date: 'November 2022',
      fullDescription: 'This guest house commercial project was designed to provide comfortable accommodations while maintaining a strong commercial appeal. The architecture blends modern aesthetics with functional spaces to create an inviting atmosphere for guests.',
      images: [
        'https://rqxpdjistljirrpgomtb.supabase.co/storage/v1/object/sign/nakshewale/images/projects/real/WhatsApp%20Image%202025-05-13%20at%2021.37.04_5ac71100.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzU2NTczMmQzLTBiZTEtNGVlZi05M2Y5LWUyM2M5Y2EwYmM1MCJ9.eyJ1cmwiOiJuYWtzaGV3YWxlL2ltYWdlcy9wcm9qZWN0cy9yZWFsL1doYXRzQXBwIEltYWdlIDIwMjUtMDUtMTMgYXQgMjEuMzcuMDRfNWFjNzExMDAuanBnIiwiaWF0IjoxNzQ3MjAxNTExLCJleHAiOjQ5MDA4MDE1MTF9.habJSusNjomQ5ePF9gQHhyN8TzxI7buiUsqUClgNtA8',
      ]
    }
  },
  {
    id: 7,
    title: 'Urban Renewal Project',
    category: 'Urban Planning',
    imageUrl: 'https://rqxpdjistljirrpgomtb.supabase.co/storage/v1/object/sign/nakshewale/images/projects/3/WhatsApp%20Image%202025-05-12%20at%2014.06.37_aa20a85e.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzU2NTczMmQzLTBiZTEtNGVlZi05M2Y5LWUyM2M5Y2EwYmM1MCJ9.eyJ1cmwiOiJuYWtzaGV3YWxlL2ltYWdlcy9wcm9qZWN0cy8zL1doYXRzQXBwIEltYWdlIDIwMjUtMDUtMTIgYXQgMTQuMDYuMzdfYWEyMGE4NWUuanBnIiwiaWF0IjoxNzQ3MjAxNDE1LCJleHAiOjQ5MDA4MDE0MTV9.4Ehkz-_S4vJplfbFQf2ORBSB7ZdLXDFH8ZLxPY9An-Y',
    description: 'Transforming urban spaces into vibrant, sustainable community hubs.',
    slug: 'urban-renewal-project',
    details: {
      date: 'November 2022',
      fullDescription: 'This guest house commercial project was designed to provide comfortable accommodations while maintaining a strong commercial appeal. The architecture blends modern aesthetics with functional spaces to create an inviting atmosphere for guests.',
      images: [
        'https://rqxpdjistljirrpgomtb.supabase.co/storage/v1/object/sign/nakshewale/images/projects/3/WhatsApp%20Image%202025-05-12%20at%2014.06.37_aa20a85e.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzU2NTczMmQzLTBiZTEtNGVlZi05M2Y5LWUyM2M5Y2EwYmM1MCJ9.eyJ1cmwiOiJuYWtzaGV3YWxlL2ltYWdlcy9wcm9qZWN0cy8zL1doYXRzQXBwIEltYWdlIDIwMjUtMDUtMTIgYXQgMTQuMDYuMzdfYWEyMGE4NWUuanBnIiwiaWF0IjoxNzQ3MjAxNDE1LCJleHAiOjQ5MDA4MDE0MTV9.4Ehkz-_S4vJplfbFQf2ORBSB7ZdLXDFH8ZLxPY9An-Y',
      ]
    }
  },
  {
    id: 8,
    title: 'Guest House Commercial',
    category: 'Commercial',
    imageUrl: 'https://rqxpdjistljirrpgomtb.supabase.co/storage/v1/object/sign/nakshewale/images/projects/3/WhatsApp%20Image%202025-05-12%20at%2014.06.37_f4c6adef.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzU2NTczMmQzLTBiZTEtNGVlZi05M2Y5LWUyM2M5Y2EwYmM1MCJ9.eyJ1cmwiOiJuYWtzaGV3YWxlL2ltYWdlcy9wcm9qZWN0cy8zL1doYXRzQXBwIEltYWdlIDIwMjUtMDUtMTIgYXQgMTQuMDYuMzdfZjRjNmFkZWYuanBnIiwiaWF0IjoxNzQ3MjAxNDU2LCJleHAiOjQ5MDA4MDE0NTZ9.zm5BAFIG652pVzIFIDonA7b_GNjfw5welwv7cW1Z_go',
    description: 'A comfortable guest house with strong commercial appeal.',
    slug: 'guest-house-commercial',
    details: {
      date: 'November 2022',
      fullDescription: 'This guest house commercial project was designed to provide comfortable accommodations while maintaining a strong commercial appeal. The architecture blends modern aesthetics with functional spaces to create an inviting atmosphere for guests.',
      images: [
   'https://rqxpdjistljirrpgomtb.supabase.co/storage/v1/object/sign/nakshewale/images/projects/3/WhatsApp%20Image%202025-05-12%20at%2014.06.37_f4c6adef.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzU2NTczMmQzLTBiZTEtNGVlZi05M2Y5LWUyM2M5Y2EwYmM1MCJ9.eyJ1cmwiOiJuYWtzaGV3YWxlL2ltYWdlcy9wcm9qZWN0cy8zL1doYXRzQXBwIEltYWdlIDIwMjUtMDUtMTIgYXQgMTQuMDYuMzdfZjRjNmFkZWYuanBnIiwiaWF0IjoxNzQ3MjAxNDU2LCJleHAiOjQ5MDA4MDE0NTZ9.zm5BAFIG652pVzIFIDonA7b_GNjfw5welwv7cW1Z_go',
      ]
    }
  }
];

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add('page-loaded');
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const delay = element.dataset.delay ? parseInt(element.dataset.delay) : 0;
          setTimeout(() => {
            element.classList.add('animated');
          }, delay);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    });
    
    animatedElements.forEach((element) => {
      observer.observe(element);
    });
    
    return () => {
      animatedElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
  
  if (!project) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-serif mb-4">Project not found</h2>
            <Link to="/" className="text-orange-500 hover:text-orange-600">
              Return to homepage
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-6 md:px-16 lg:px-24 mb-6">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link to="/" className="hover:text-orange-500">Home</Link>
            <ChevronRight size={14} className="mx-2" />
            <Link to="/#projects" className="hover:text-orange-500">Projects</Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-orange-500">{project.title}</span>
          </div>
        </div>
        
        <div className="container mx-auto px-6 md:px-16 lg:px-24 mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="max-w-2xl animate-on-scroll slide-up">
              <Link to="/#projects" className="inline-flex items-center text-orange-500 hover:text-orange-600 mb-6">
                <ArrowLeft size={16} className="mr-2" />
                Back to Projects
              </Link>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6">{project.title}</h1>
              <p className="text-lg text-muted-foreground mb-8">{project.details.fullDescription}</p>
              
              <div className="border-t border-b py-6 mb-8">
                <div className="flex items-start">
                  <Calendar size={20} className="mr-3 text-orange-500 mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Date</p>
                    <p>{project.details.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-6 md:px-16 lg:px-24 mb-20">
          <div className="mb-8 rounded-3xl overflow-hidden shadow-lg animate-on-scroll">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-[50vh] md:h-[70vh] object-cover"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {project.details.images.map((img, index) => (
              <div 
                key={index} 
                className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all animate-on-scroll"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img 
                  src={img} 
                  alt={`${project.title} - Detail ${index + 1}`} 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>

          <div className="mt-8">
            <AppointmentCard />
          </div>

          <div className="mt-8">
            <ConsultationCard />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;