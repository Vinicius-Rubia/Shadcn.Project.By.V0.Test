import {
	Blocks,
	BriefcaseBusiness,
	Contact,
	FileCode2,
	FileLineChart,
	FileText,
	FileX,
	GanttChart,
	Landmark,
	Package,
	PackageSearch,
	Receipt,
	ReceiptText,
	SquarePlus,
	Truck,
	UserRound,
} from "lucide-react";
import { ElementType } from "react";

export interface Item {
	item: MenuItemTypes;
}

export interface MenuItemTypes {
	key: string;
	label: string;
	isTitle?: boolean;
	Icon?: ElementType;
	url?: string;
	badge?: {
		variant: string;
		text: string;
	};
	parentKey?: string;
	target?: string;
	children?: MenuItemTypes[];
}

export const MENU_ITEMS: MenuItemTypes[] = [
	{
		key: "usuarios",
		label: "Usuários",
		isTitle: true,
		Icon: UserRound,
		children: [
			{
				key: "listagem",
				label: "Listagem",
				url: "/listagem",
				Icon: GanttChart,
				parentKey: "usuarios",
			},
			{
				key: "adicionar",
				label: "Adicionar",
				url: "/adicionar",
				Icon: SquarePlus,
				parentKey: "usuarios",
			},
		],
	},
	{
		key: "contatos",
		label: "Contatos",
		isTitle: true,
		Icon: Contact,
		children: [
			{
				key: "listagem",
				label: "Listagem",
				url: "/listagem",
				Icon: GanttChart,
				parentKey: "contatos",
			},
			{
				key: "adicionar",
				label: "Adicionar",
				url: "/adicionar",
				Icon: SquarePlus,
				parentKey: "contatos",
			},
		],
	},
	{
		key: "certificado",
		label: "Certificado",
		isTitle: true,
		Icon: FileText,
		children: [
			{
				key: "listagem",
				label: "Listagem",
				url: "/listagem",
				Icon: GanttChart,
				parentKey: "certificado",
			},
			{
				key: "adicionar",
				label: "Adicionar",
				url: "/adicionar",
				Icon: SquarePlus,
				parentKey: "certificado",
			},
		],
	},
	{
		key: "produtos",
		label: "Produtos",
		isTitle: true,
		Icon: Package,
		children: [
			{
				key: "listagem",
				label: "Listagem",
				url: "/listagem",
				Icon: GanttChart,
				parentKey: "produtos",
			},
			{
				key: "adicionar",
				label: "Adicionar",
				url: "/adicionar",
				Icon: SquarePlus,
				parentKey: "produtos",
			},
			{
				key: "relatorios",
				label: "Relatórios",
				isTitle: true,
				Icon: FileLineChart,
        parentKey: "produtos",
        children: [
          {
            key: "estoque",
            label: "Estoque",
            url: "/estoque",
            Icon: PackageSearch,
            parentKey: "relatorios",
          },
          {
            key: "saidas",
            label: "Saída de Produtos",
            url: "/saida-de-produto",
            Icon: Truck,
            parentKey: "relatorios",
          },
        ]
			},
		],
	},
	{
		key: "nota-fiscal",
		label: "Nota Fiscal Eletrônica",
		isTitle: true,
		Icon: ReceiptText,
		children: [
			{
				key: "listagem",
				label: "Listagem",
				url: "/listagem",
				Icon: GanttChart,
				parentKey: "nota-fiscal",
			},
			{
				key: "adicionar",
				label: "Adicionar",
				url: "/adicionar",
				Icon: SquarePlus,
				parentKey: "nota-fiscal",
			},
			{
				key: "importar-xml",
				label: "Importar XML",
				url: "/importar-xml",
				Icon: FileCode2,
				parentKey: "nota-fiscal",
			},
			{
				key: "manifestos",
				label: "Manifestos",
				url: "/manifestos",
				Icon: FileText,
				parentKey: "nota-fiscal",
			},
			{
				key: "inutilizacao",
				label: "Inutilização",
				url: "/inutilizacao",
				Icon: FileX,
				parentKey: "nota-fiscal",
			},
		],
	},
	{
		key: "servicos",
		label: "Serviços",
		isTitle: true,
		Icon: Blocks,
		children: [
			{
				key: "listagem",
				label: "Listagem",
				url: "/listagem",
				Icon: GanttChart,
				parentKey: "servicos",
			},
			{
				key: "adicionar",
				label: "Adicionar",
				url: "/adicionar",
				Icon: SquarePlus,
				parentKey: "servicos",
			},
		],
	},
	{
		key: "bancos",
		label: "Bancos",
		isTitle: true,
		Icon: Landmark,
		children: [
			{
				key: "listagem",
				label: "Listagem",
				url: "/listagem",
				Icon: GanttChart,
				parentKey: "bancos",
			},
			{
				key: "adicionar",
				label: "Adicionar",
				url: "/adicionar",
				Icon: SquarePlus,
				parentKey: "bancos",
			},
		],
	},
	{
		key: "contas",
		label: "Contas",
		isTitle: true,
		Icon: Receipt,
		children: [
			{
				key: "receber",
        label: "A Receber",
        isTitle: true,
				Icon: GanttChart,
				parentKey: "contas",
				children: [
					{
						key: "listagem",
						label: "Listagem",
						url: "/listagem",
						Icon: GanttChart,
						parentKey: "receber",
					},
          {
            key: "adicionar",
            label: "Adicionar",
            url: "/adicionar",
            Icon: SquarePlus,
            parentKey: "receber",
          },
					{
						key: "relatorio-a-receber",
						label: "Relatório",
						url: "/relatorio-a-receber",
						Icon: FileLineChart,
						parentKey: "receber",
					},
				],
			},
			{
				key: "pagar",
        label: "A Pagar",
        isTitle: true,
				Icon: SquarePlus,
				parentKey: "contas",
				children: [
					{
						key: "listagem",
						label: "Listagem",
						url: "/listagem",
						Icon: GanttChart,
						parentKey: "pagar",
					},
					{
						key: "adicionar",
						label: "Adicionar",
						url: "/adicionar",
						Icon: SquarePlus,
						parentKey: "pagar",
					},
				],
			},
			{
				key: "relatorios",
				label: "Relatórios",
        url: "/relatorios",
        Icon: FileLineChart,
				parentKey: "contas",
			},
		],
	},
	{
		key: "contratos",
		label: "Contratos",
		isTitle: true,
		Icon: BriefcaseBusiness,
		children: [
			{
				key: "listagem",
				label: "Listagem",
        url: "/listagem",
        Icon: GanttChart,
				parentKey: "contratos",
			},
			{
				key: "adicionar",
				label: "Adicionar",
        url: "/adicionar",
        Icon: SquarePlus,
				parentKey: "contratos",
			},
		],
	},
];