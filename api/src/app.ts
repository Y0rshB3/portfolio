require('dotenv').config();
import express from 'express';
import { AppDataSource } from './config/typeormConfig';
import * as homeController from './controllers/homeController';
import * as aboutController from './controllers/aboutController';
import * as detailFromAboutController from './controllers/detailFromAboutController';
import * as educationController from './controllers/educationController';
import * as experienceController from './controllers/experienceController';
import * as formContactController from './controllers/formContactController';
import * as homeSkillController from './controllers/homeSkillController';
import * as skillController from './controllers/skillController';
import * as portfolioController from './controllers/portfolioController';
import * as serviceController from './controllers/serviceController';
import * as socialController from './controllers/socialController';
import * as resumeController from './controllers/resumeController';

const app = express();

AppDataSource.initialize().then(() => {
    console.log("Data Source has been initialized!");
}).catch((err) => {
    console.error("Error during Data Source initialization:", err);
});

app.use(express.json());

app.get('/info/home', homeController.getHome);
app.get('/info/about', aboutController.getAbout);
app.get('/info/detailFromAbout', detailFromAboutController.getDetailFromAbout);
app.get('/info/education', educationController.getEducation);
app.get('/info/experience', experienceController.getExperience);
app.get('/info/formContact', formContactController.getFormContact);
app.get('/info/homeSkill', homeSkillController.getHomeSkill);
app.get('/info/skill', skillController.getSkill);
app.get('/info/portfolio', portfolioController.getPortfolio);
app.get('/info/service', serviceController.getService);
app.get('/info/social', socialController.getSocial);
app.get('/resume', resumeController.getResume);

// Más rutas y controladores según sea necesario

app.listen(process.env.portListen || 3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});