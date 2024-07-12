// pages/perfil.js
import { motion } from 'framer-motion';
import Perfil from "../components/Perfil";

const PerfilLoja = () => (
  <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.1 }}
  >
    <div className="body">
      <Perfil />
    </div>
  </motion.div>
);

export default PerfilLoja;
