import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from '@/components/ui/icon';

const Index = () => {
  const healthFacts = [
    {
      title: "Никотиновая зависимость",
      description: "Электронные сигареты содержат никотин в высоких концентрациях",
      percentage: 95,
      icon: "Brain"
    },
    {
      title: "Заболевания лёгких",
      description: "Повышенный риск развития хронических заболеваний дыхательной системы",
      percentage: 85,
      icon: "Lung"
    },
    {
      title: "Сердечно-сосудистые риски",
      description: "Увеличение артериального давления и нагрузки на сердце",
      percentage: 78,
      icon: "Heart"
    },
    {
      title: "Повреждение клеток",
      description: "Токсичные вещества в паре повреждают клетки организма",
      percentage: 92,
      icon: "AlertTriangle"
    }
  ];

  const symptoms = [
    "Кашель и раздражение горла",
    "Одышка при физической нагрузке", 
    "Головные боли и головокружение",
    "Нарушения сна и беспокойство",
    "Снижение иммунитета",
    "Проблемы с концентрацией внимания"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Icon name="AlertTriangle" size={80} className="text-red-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 font-inter">
              Правда о вреде
              <span className="text-red-600 block">электронных сигарет</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Научные исследования показывают серьёзные риски для здоровья при использовании вейпов. 
              Узнайте факты, которые помогут принять осознанное решение.
            </p>
            <Alert className="max-w-2xl mx-auto border-red-200 bg-red-50">
              <Icon name="AlertCircle" size={20} className="text-red-600" />
              <AlertTitle className="text-red-800">Предупреждение</AlertTitle>
              <AlertDescription className="text-red-700">
                Электронные сигареты не являются безопасной альтернативой курению
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </div>

      {/* Scientific Facts Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Научные факты</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Исследования ведущих медицинских институтов мира подтверждают опасность вейпинга
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {healthFacts.map((fact, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 bg-white">
                <CardHeader className="text-center pb-4">
                  <Icon name={fact.icon} size={48} className="mx-auto text-red-600 mb-4" />
                  <CardTitle className="text-lg font-semibold text-gray-900">{fact.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-sm text-gray-600 text-center">
                    {fact.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Риск</span>
                      <span className="font-semibold text-red-600">{fact.percentage}%</span>
                    </div>
                    <Progress value={fact.percentage} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Statistics */}
          <Card className="bg-white border-0 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-900">Статистика исследований</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-red-600">68%</div>
                  <p className="text-gray-600">подростков, попробовавших вейп, продолжают курить</p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-red-600">3x</div>
                  <p className="text-gray-600">выше риск перехода на обычные сигареты</p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-red-600">2000+</div>
                  <p className="text-gray-600">химических веществ в составе пара</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Symptoms and Consequences */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Симптомы и последствия</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Признаки влияния электронных сигарет на организм
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Card className="border-0 bg-red-50 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-red-800 flex items-center gap-2">
                  <Icon name="AlertCircle" size={24} />
                  Краткосрочные симптомы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {symptoms.map((symptom, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                      <Icon name="Minus" size={16} className="text-red-600 flex-shrink-0" />
                      <span className="text-gray-800">{symptom}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gray-50 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <Icon name="TrendingDown" size={24} />
                  Долгосрочные последствия
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Дыхательная система</h4>
                    <p className="text-gray-700 text-sm">
                      Хроническая обструктивная болезнь лёгких, астма, пневмония
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Сердечно-сосудистая система</h4>
                    <p className="text-gray-700 text-sm">
                      Аритмия, повышенное давление, риск инфаркта и инсульта
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Нервная система</h4>
                    <p className="text-gray-700 text-sm">
                      Зависимость, нарушения когнитивных функций, депрессия
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-red-600 to-red-700 text-white border-0">
              <CardContent className="py-8">
                <Icon name="Heart" size={48} className="mx-auto mb-4 text-white" />
                <h3 className="text-2xl font-bold mb-4">Позаботьтесь о своём здоровье</h3>
                <p className="text-red-100 mb-6">
                  Если вы курите электронные сигареты, обратитесь к врачу за помощью в отказе от курения
                </p>
                <Badge variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
                  Здоровье — это главное
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;