import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerModule } from 'ngx-color-picker';
import {  FormControl, Validators } from '@angular/forms';
import { AgrupationService} from 'src/app/services/agrupation.service';

interface Region {
  id: number;
  name: string;
  comunas: Comuna[];
}

interface Comuna {
  id: number;
  name: string;
}

@Component({
  selector: 'app-form-elements',
  standalone: true,
  imports: [CommonModule, SharedModule, NgbDropdownModule, ColorPickerModule],
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.scss']
})



export default class FormElementsComponent {
  nombreAgrupacion: string = '';
  emailAgrupacion: string = '';
  fechaFundacion: string = '';
  direccionAgrupacion: string = '';
  telefonoAgrupacion: string = '';
  tipoAgrupacion: string = '';
  miembrosAgrupacion: string = '';
  webAgrupacion: string = '';
  descripcionAgrupacion: string = '';
  logoAgrupacion: string = '';
  comunaAgrupacion: string = '';

  nombreRepresentante: string = '';
  emailRepresentante: string = '';

  showSuccessMessage = false;



  emailFormControl = new FormControl('', [
    Validators.email
  ]);

  websiteFormControl = new FormControl('', [
    // Puedes ajustar la expresión regular para que se adapte a tus necesidades
    Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+$/)

  ]);


  regiones: Region[] = [
    {
      id: 1,
      name: 'Región de Arica y Parinacota',
      comunas: [
        { id: 1, name: 'Arica' },
        { id: 2, name: 'Camarones' },
        { id: 3, name: 'Putre' },
        { id: 4, name: 'General Lagos' }
      ]
    },
    {
      id: 2,
      name: 'Región de Tarapacá',
      comunas: [
        { id: 5, name: 'Alto Hospicio' },
        { id: 6, name: 'Camiña' },
        { id: 7, name: 'Colchane' },
        { id: 8, name: 'Huara' },
        { id: 9, name: 'Iquique' },
        { id: 10, name: 'Pica' },
        { id: 11, name: 'Pozo Almonte' }
      ]
    },
    {
      id: 3,
      name: 'Región de Antofagasta',
      comunas: [
        { id: 12, name: 'Antofagasta' },
        { id: 13, name: 'Calama' },
        { id: 14, name: 'María Elena' },
        { id: 15, name: 'Mejillones' },
        { id: 16, name: 'Ollagüe' },
        { id: 17, name: 'San Pedro de Atacama' },
        { id: 18, name: 'Sierra Gorda' },
        { id: 19, name: 'Taltal' },
        { id: 20, name: 'Tocopilla' }
      ]
    },
    {
      id: 4,
      name: 'Región de Atacama',
      comunas: [
        { id: 21, name: 'Alto del Carmen' },
        { id: 22, name: 'Caldera' },
        { id: 23, name: 'Chañaral' },
        { id: 24, name: 'Copiapó' },
        { id: 25, name: 'Diego de Almagro' },
        { id: 26, name: 'Freirina' },
        { id: 27, name: 'Huasco' },
        { id: 28, name: 'Tierra Amarilla' },
        { id: 29, name: 'Vallenar' }
      ]
    },
    {
      id: 5,
      name: 'Región de Coquimbo',
      comunas: [
        { id: 30, name: 'Andacollo' },
        { id: 31, name: 'Canela' },
        { id: 32, name: 'Combarbalá' },
        { id: 33, name: 'Coquimbo' },
        { id: 34, name: 'Illapel' },
        { id: 35, name: 'La Higuera' },
        { id: 36, name: 'La Serena' },
        { id: 37, name: 'Los Vilos' },
        { id: 38, name: 'Monte Patria' },
        { id: 39, name: 'Ovalle' },
        { id: 40, name: 'Paihuano' },
        { id: 41, name: 'Punitaqui' },
        { id: 42, name: 'Río Hurtado' },
        { id: 43, name: 'Salamanca' },
        { id: 44, name: 'Vicuña' }
      ]
    },
    {
      id: 6,
      name: 'Región de Valparaíso',
      comunas: [
        { id: 45, name: 'Algarrobo' },
        { id: 46, name: 'Cabildo' },
        { id: 47, name: 'Calera' },
        { id: 48, name: 'Calle Larga' },
        { id: 49, name: 'Cartagena' },
        { id: 50, name: 'Casablanca' },
        { id: 51, name: 'Catemu' },
        { id: 52, name: 'Concón' },
        { id: 53, name: 'El Quisco' },
        { id: 54, name: 'El Tabo' },
        { id: 55, name: 'Hijuelas' },
        { id: 56, name: 'Isla de Pascua' },
        { id: 57, name: 'Juan Fernández' },
        { id: 58, name: 'La Cruz' },
        { id: 59, name: 'La Ligua' },
        { id: 60, name: 'Limache' },
        { id: 61, name: 'Llaillay' },
        { id: 62, name: 'Los Andes' },
        { id: 63, name: 'Nogales' },
        { id: 64, name: 'Olmué' },
        { id: 65, name: 'Panquehue' },
        { id: 66, name: 'Papudo' },
        { id: 67, name: 'Petorca' },
        { id: 68, name: 'Puchuncaví' },
        { id: 69, name: 'Putaendo' },
        { id: 70, name: 'Quillota' },
        { id: 71, name: 'Quilpué' },
        { id: 72, name: 'Quintero' },
        { id: 73, name: 'Rinconada' },
        { id: 74, name: 'San Antonio' },
        { id: 75, name: 'San Esteban' },
        { id: 76, name: 'San Felipe' },
        { id: 77, name: 'Santa María' },
        { id: 78, name: 'Santo Domingo' },
        { id: 79, name: 'Valparaíso' },
        { id: 80, name: 'Villa Alemana' },
        { id: 81, name: 'Viña del Mar' },
        { id: 82, name: 'Zapallar' }
      ]
    },
    {
      id: 7,
      name: 'Región Metropolitana',
      comunas: [
        { id: 83, name: 'Alhué' },
        { id: 84, name: 'Buin' },
        { id: 85, name: 'Calera de Tango' },
        { id: 86, name: 'Cerrillos' },
        { id: 87, name: 'Cerro Navia' },
        { id: 88, name: 'Colina' },
        { id: 89, name: 'Conchalí' },
        { id: 90, name: 'Curacaví' },
        { id: 91, name: 'El Bosque' },
        { id: 92, name: 'El Monte' },
        { id: 93, name: 'Estación Central' },
        { id: 94, name: 'Huechuraba' },
        { id: 95, name: 'Independencia' },
        { id: 96, name: 'Isla de Maipo' },
        { id: 97, name: 'La Cisterna' },
        { id: 98, name: 'La Florida' },
        { id: 99, name: 'La Granja' },
        { id: 100, name: 'Lampa' },
        { id: 101, name: 'La Pintana' },
        { id: 102, name: 'La Reina' },
        { id: 103, name: 'Las Condes' },
        { id: 104, name: 'Lo Barnechea' },
        { id: 105, name: 'Lo Espejo' },
        { id: 106, name: 'Lo Prado' },
        { id: 107, name: 'Macul' },
        { id: 108, name: 'Maipú' },
        { id: 109, name: 'María Pinto' },
        { id: 110, name: 'Melipilla' },
        { id: 111, name: 'Ñuñoa' },
        { id: 112, name: 'Padre Hurtado' },
        { id: 113, name: 'Paine' },
        { id: 114, name: 'Pedro Aguirre Cerda' },
        { id: 115, name: 'Peñaflor' },
        { id: 116, name: 'Peñalolén' },
        { id: 117, name: 'Pirque' },
        { id: 118, name: 'Providencia' },
        { id: 119, name: 'Pudahuel' },
        { id: 120, name: 'Puente Alto' },
        { id: 121, name: 'Quilicura' },
        { id: 122, name: 'Quinta Normal' },
        { id: 123, name: 'Recoleta' },
        { id: 124, name: 'Renca' },
        { id: 125, name: 'San Bernardo' },
        { id: 126, name: 'San Joaquín' },
        { id: 127, name: 'San José de Maipo' },
        { id: 128, name: 'San Miguel' },
        { id: 129, name: 'San Pedro' },
        { id: 130, name: 'San Ramón' },
        { id: 131, name: 'Santiago' },
        { id: 132, name: 'Talagante' },
        { id: 133, name: 'TilTil' },
        { id: 134, name: 'Vitacura' }
      ]
    },
    {
      id: 8,
      name: 'Región del Libertador General Bernardo OHiggins',
      comunas: [
        { id: 135, name: 'Rancagua' },
        { id: 136, name: 'Codegua' },
        { id: 137, name: 'Coinco' },
        { id: 138, name: 'Coltauco' },
        { id: 139, name: 'Doñihue' },
        { id: 140, name: 'Graneros' },
        { id: 141, name: 'Las Cabras' },
        { id: 142, name: 'Machalí' },
        { id: 143, name: 'Malloa' },
        { id: 144, name: 'Mostazal' },
        { id: 145, name: 'Olivar' },
        { id: 146, name: 'Peumo' },
        { id: 147, name: 'Pichidegua' },
        { id: 148, name: 'Quinta de Tilcoco' },
        { id: 149, name: 'Rengo' },
        { id: 150, name: 'Requínoa' },
        { id: 151, name: 'San Vicente' },
        { id: 152, name: 'Pichilemu' },
        { id: 153, name: 'La Estrella' },
        { id: 154, name: 'Litueche' },
        { id: 155, name: 'Marchihue' },
        { id: 156, name: 'Navidad' },
        { id: 157, name: 'Paredones' },
        { id: 158, name: 'San Fernando' },
        { id: 159, name: 'Chépica' },
        { id: 160, name: 'Chimbarongo' },
        { id: 161, name: 'Lolol' },
        { id: 162, name: 'Nancagua' },
        { id: 163, name: 'Palmilla' },
        { id: 164, name: 'Peralillo' },
        { id: 165, name: 'Placilla' },
        { id: 166, name: 'Pumanque' },
        { id: 167, name: 'Santa Cruz' }
      ]
    },
    {
      id: 9,
      name: 'Región del Maule',
      comunas: [
        { id: 168, name: 'Talca' },
        { id: 169, name: 'Constitución' },
        { id: 170, name: 'Curepto' },
        { id: 171, name: 'Empedrado' },
        { id: 172, name: 'Maule' },
        { id: 173, name: 'Pelarco' },
        { id: 174, name: 'Pencahue' },
        { id: 175, name: 'Río Claro' },
        { id: 176, name: 'San Clemente' },
        { id: 177, name: 'San Rafael' },
        { id: 178, name: 'Cauquenes' },
        { id: 179, name: 'Chanco' },
        { id: 180, name: 'Pelluhue' },
        { id: 181, name: 'Curicó' },
        { id: 182, name: 'Hualañé' },
        { id: 183, name: 'Licantén' },
        { id: 184, name: 'Molina' },
        { id: 185, name: 'Rauco' },
        { id: 186, name: 'Romeral' },
        { id: 187, name: 'Sagrada Familia' },
        { id: 188, name: 'Teno' },
        { id: 189, name: 'Vichuquén' },
        { id: 190, name: 'Linares' },
        { id: 191, name: 'Colbún' },
        { id: 192, name: 'Longaví' },
        { id: 193, name: 'Parral' },
        { id: 194, name: 'Retiro' },
        { id: 195, name: 'San Javier' },
        { id: 196, name: 'Villa Alegre' },
        { id: 197, name: 'Yerbas Buenas' }
      ]
    },
    {
      id: 10,
      name: 'Región de Ñuble',
      comunas: [
        { id: 198, name: 'Cobquecura' },
        { id: 199, name: 'Coelemu' },
        { id: 200, name: 'Ninhue' },
        { id: 201, name: 'Portezuelo' },
        { id: 202, name: 'Quirihue' },
        { id: 203, name: 'Ránquil' },
        { id: 204, name: 'Treguaco' },
        { id: 205, name: 'Bulnes' },
        { id: 206, name: 'Chillán Viejo' },
        { id: 207, name: 'Chillán' },
        { id: 208, name: 'El Carmen' },
        { id: 209, name: 'Pemuco' },
        { id: 210, name: 'Pinto' },
        { id: 211, name: 'Quillón' },
        { id: 212, name: 'San Ignacio' },
        { id: 213, name: 'Yungay' },
        { id: 214, name: 'Coihueco' },
        { id: 215, name: 'Ñiquén' },
        { id: 216, name: 'San Carlos' },
        { id: 217, name: 'San Fabián' },
        { id: 218, name: 'San Nicolás' }
      ]
    },
    {
      id: 11,
      name: 'Región del Biobío',
      comunas: [
        { id: 219, name: 'Concepción' },
        { id: 220, name: 'Coronel' },
        { id: 221, name: 'Chiguayante' },
        { id: 222, name: 'Florida' },
        { id: 223, name: 'Hualqui' },
        { id: 224, name: 'Lota' },
        { id: 225, name: 'Penco' },
        { id: 226, name: 'San Pedro de la Paz' },
        { id: 227, name: 'Santa Juana' },
        { id: 228, name: 'Talcahuano' },
        { id: 229, name: 'Tomé' },
        { id: 230, name: 'Hualpén' },
        { id: 231, name: 'Lebu' },
        { id: 232, name: 'Arauco' },
        { id: 233, name: 'Cañete' },
        { id: 234, name: 'Contulmo' },
        { id: 235, name: 'Curanilahue' },
        { id: 236, name: 'Los Álamos' },
        { id: 237, name: 'Tirúa' },
        { id: 238, name: 'Los Ángeles' },
        { id: 239, name: 'Antuco' },
        { id: 240, name: 'Cabrero' },
        { id: 241, name: 'Laja' },
        { id: 242, name: 'Mulchén' },
        { id: 243, name: 'Nacimiento' },
        { id: 244, name: 'Negrete' },
        { id: 245, name: 'Quilaco' },
        { id: 246, name: 'Quilleco' },
        { id: 247, name: 'San Rosendo' },
        { id: 248, name: 'Santa Bárbara' },
        { id: 249, name: 'Tucapel' },
        { id: 250, name: 'Yumbel' },
        { id: 251, name: 'Alto Biobío' }
      ]
    },
    {
      id: 12,
      name: 'Región de La Araucanía',
      comunas: [
        { id: 252, name: 'Temuco' },
        { id: 253, name: 'Carahue' },
        { id: 254, name: 'Cunco' },
        { id: 255, name: 'Curarrehue' },
        { id: 256, name: 'Freire' },
        { id: 257, name: 'Galvarino' },
        { id: 258, name: 'Gorbea' },
        { id: 259, name: 'Lautaro' },
        { id: 260, name: 'Loncoche' },
        { id: 261, name: 'Melipeuco' },
        { id: 262, name: 'Nueva Imperial' },
        { id: 263, name: 'Padre las Casas' },
        { id: 264, name: 'Perquenco' },
        { id: 265, name: 'Pitrufquén' },
        { id: 266, name: 'Pucón' },
        { id: 267, name: 'Saavedra' },
        { id: 268, name: 'Teodoro Schmidt' },
        { id: 269, name: 'Toltén' },
        { id: 270, name: 'Vilcún' },
        { id: 271, name: 'Villarrica' },
        { id: 272, name: 'Cholchol' },
        { id: 273, name: 'Angol' },
        { id: 274, name: 'Collipulli' },
        { id: 275, name: 'Curacautín' },
        { id: 276, name: 'Ercilla' },
        { id: 277, name: 'Lonquimay' },
        { id: 278, name: 'Los Sauces' },
        { id: 279, name: 'Lumaco' },
        { id: 280, name: 'Purén' },
        { id: 281, name: 'Renaico' },
        { id: 282, name: 'Traiguén' },
        { id: 283, name: 'Victoria' }
      ]
    },
    {
      id: 13,
      name: 'Región de Los Ríos',
      comunas: [
        { id: 284, name: 'Valdivia' },
        { id: 285, name: 'Corral' },
        { id: 286, name: 'Lanco' },
        { id: 287, name: 'Los Lagos' },
        { id: 288, name: 'Máfil' },
        { id: 289, name: 'Mariquina' },
        { id: 290, name: 'Paillaco' },
        { id: 291, name: 'Panguipulli' },
        { id: 292, name: 'La Unión' },
        { id: 293, name: 'Futrono' },
        { id: 294, name: 'Lago Ranco' },
        { id: 295, name: 'Río Bueno' }
      ]
    },
    {
      id: 14,
      name: 'Región de Los Lagos',
      comunas: [
        { id: 296, name: 'Puerto Montt' },
        { id: 297, name: 'Calbuco' },
        { id: 298, name: 'Cochamó' },
        { id: 299, name: 'Fresia' },
        { id: 300, name: 'Frutillar' },
        { id: 301, name: 'Los Muermos' },
        { id: 302, name: 'Llanquihue' },
        { id: 303, name: 'Maullín' },
        { id: 304, name: 'Puerto Varas' },
        { id: 305, name: 'Castro' },
        { id: 306, name: 'Ancud' },
        { id: 307, name: 'Chonchi' },
        { id: 308, name: 'Curaco de Vélez' },
        { id: 309, name: 'Dalcahue' },
        { id: 310, name: 'Puqueldón' },
        { id: 311, name: 'Queilén' },
        { id: 312, name: 'Quellón' },
        { id: 313, name: 'Quemchi' },
        { id: 314, name: 'Quinchao' },
        { id: 315, name: 'Osorno' },
        { id: 316, name: 'Puerto Octay' },
        { id: 317, name: 'Purranque' },
        { id: 318, name: 'Puyehue' },
        { id: 319, name: 'Río Negro' },
        { id: 320, name: 'San Juan de la Costa' },
        { id: 321, name: 'San Pablo' },
        { id: 322, name: 'Chaitén' },
        { id: 323, name: 'Futaleufú' },
        { id: 324, name: 'Hualaihué' },
        { id: 325, name: 'Palena' }
      ]
    },
    {
      id: 15,
      name: 'Región de Aysén del G. Carlos Ibáñez del Campo',
      comunas: [
        { id: 326, name: 'Coihaique' },
        { id: 327, name: 'Lago Verde' },
        { id: 328, name: 'Aisén' },
        { id: 329, name: 'Cisnes' },
        { id: 330, name: 'Guaitecas' },
        { id: 331, name: 'Cochrane' },
        { id: 332, name: 'O’Higgins' },
        { id: 333, name: 'Tortel' },
        { id: 334, name: 'Chile Chico' },
        { id: 335, name: 'Río Ibáñez' }
      ]
    },
    {
      id: 16,
      name: 'Región de Magallanes',
      comunas: [
        { id: 336, name: 'Punta Arenas' },
        { id: 337, name: 'Laguna Blanca' },
        { id: 338, name: 'Río Verde' },
        { id: 339, name: 'San Gregorio' },
        { id: 340, name: 'Cabo de Hornos (Ex Navarino)' },
        { id: 341, name: 'Antártica' },
        { id: 342, name: 'Porvenir' },
        { id: 343, name: 'Primavera' },
        { id: 344, name: 'Timaukel' },
        { id: 345, name: 'Natales' },
        { id: 346, name: 'Torres del Paine' }
      ]
    }
  ];

  regionSeleccionada: number | null = null;
  comunaSeleccionada: number | null = null;
  comunasSeleccionadas: Comuna[] = [];

  onRegionChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const regionId = Number(selectElement.value);
    this.regionSeleccionada = regionId;
    const region = this.regiones.find(r => r.id === regionId);
    this.comunasSeleccionadas = region ? region.comunas : [];
    this.comunaSeleccionada = null;
  }


  constructor(private agrupationService: AgrupationService) { }

  enviarNuevaAgrupation() {
    const datosRepresentante = {
      namerep: this.nombreRepresentante,
      emailrep: this.emailRepresentante
    };

    this.agrupationService.crearRepresentative(datosRepresentante).subscribe({
      next: (responseRepresentante) => {
        console.log('Representante creado con éxito:', responseRepresentante);
        const idRepresentante = responseRepresentante.id;

        // Ahora, con el ID del representante, crear la agrupación
        const datosAgrupation = {
          nameagrupation: this.nombreAgrupacion,
          emailagrupation: this.emailAgrupacion,
          fundationdate: this.fechaFundacion,
          addressagrupation: this.direccionAgrupacion,
          phoneagrupation: this.telefonoAgrupacion,
          typeagrupation: this.tipoAgrupacion,
          membersagrupation: this.miembrosAgrupacion,
          descriptionagrupation: this.descripcionAgrupacion,
          webagrupation: this.webAgrupacion,
          logoagrupation: this.logoAgrupacion,
          commune_id_commune: this.comunaSeleccionada,
          representative_id_rep: idRepresentante
        };

        this.agrupationService.crearAgrupation(datosAgrupation).subscribe({
          next: (responseAgrupation) => {
            console.log('Agrupación creada con éxito', responseAgrupation);

            // Resetea las propiedades después de la creación exitosa
            this.nombreAgrupacion = '';
            this.emailAgrupacion = '';
            this.fechaFundacion = '';
            this.direccionAgrupacion = '';
            this.telefonoAgrupacion = '';
            this.tipoAgrupacion = '';
            this.miembrosAgrupacion = '';
            this.webAgrupacion = '';
            this.descripcionAgrupacion = '';
            this.logoAgrupacion = '';
            this.comunaAgrupacion = '';
            this.nombreRepresentante = '';
            this.emailRepresentante = '';


            // Mostrar el mensaje de éxito
            this.showSuccessMessage = true;

            setTimeout(() => this.showSuccessMessage = false, 3000);
          },

          error: (errorAgrupation) => console.error('Error al crear la agrupación:', errorAgrupation)
        });
      },
      error: (errorRepresentante) => console.error('Error al crear el representante:', errorRepresentante)
    });
  }
}
