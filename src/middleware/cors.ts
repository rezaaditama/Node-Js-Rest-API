import cors from 'cors';

export const corsOptions = cors({
  origin: '*', //siapa saja yang diizinkan mengakses sumber daya
  methods: ['GET', 'POST', 'PUT', 'DELETE'], //Method Verbs yang diizinkan
  credentials: true, //izinkan browser membawa identitas user (cookie/token) saat request lintas domain.
});
