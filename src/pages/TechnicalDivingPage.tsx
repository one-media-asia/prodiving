import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Waves, Users, Shield, BookOpen, Target, Award, MapPin } from "lucide-react";

const TechnicalDivingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-ocean-50 to-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="destructive" className="mb-4">
                Advanced Course
              </Badge>
              <h1 className="text-5xl font-bold text-ocean-900 mb-6">
                Technical Diving
              </h1>
              <h2 className="text-3xl font-semibold text-ocean-700 mb-8">
                Master Advanced Diving Techniques on Koh Tao
              </h2>
              <p className="text-xl text-ocean-700 mb-8 max-w-3xl mx-auto">
                Push the boundaries of recreational diving with advanced technical training. Learn to safely
                explore deeper wrecks, penetrate caves, and handle complex underwater environments with
                specialized equipment and techniques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-ocean-600" />
                  <span className="text-ocean-700">Duration: 5-7 days</span>
                </div>
                <div className="flex items-center gap-2">
                  <Waves className="w-5 h-5 text-ocean-600" />
                  <span className="text-ocean-700">Max depth: 60m+</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-ocean-600" />
                  <span className="text-ocean-700">Contact for pricing</span>
                </div>
              </div>
              <Button size="lg" className="bg-ocean-600 hover:bg-ocean-700">
                Start Your Technical Training
              </Button>
            </div>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-ocean-900 mb-8 text-center">
                Advanced Diving for Experienced Professionals
              </h2>
              <div className="prose prose-lg max-w-none text-ocean-700 mb-12">
                <p className="mb-6">
                  Technical diving represents the cutting edge of scuba diving, requiring advanced skills,
                  specialized equipment, and comprehensive training. Our technical diving courses are designed
                  for experienced divers who want to explore beyond the limits of recreational diving.
                </p>
                <p className="mb-6">
                  You'll learn advanced decompression techniques, mixed gas diving, cave exploration,
                  wreck penetration, and other specialized skills. Our training emphasizes safety,
                  meticulous planning, and the use of technical diving equipment including rebreathers,
                  multiple cylinders, and advanced life support systems.
                </p>
                <p className="mb-6">
                  Koh Tao provides an excellent environment for technical diving training with its clear
                  waters, diverse underwater features, and experienced technical diving instructors.
                  Whether you're interested in deep wrecks, cave systems, or advanced exploration,
                  our technical courses will prepare you for these challenging environments.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-ocean-900 mb-6">Safety First in Technical Diving</h3>
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-12">
                <p className="text-red-800">
                  <strong>Important:</strong> Technical diving carries significantly higher risks than recreational diving.
                  Our courses emphasize redundant safety systems, emergency procedures, and conservative diving practices.
                  All participants must demonstrate exceptional skill and judgment before advancing to technical diving.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 bg-ocean-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-ocean-900 mb-8 text-center">
                Technical Diving Course Includes
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Advanced Training Components
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Decompression diving techniques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Mixed gas diving (Nitrox/Trimix)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Technical equipment configuration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Cave and wreck exploration skills</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Advanced life support systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Technical diving certification</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Prerequisites</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Be at least 21 years old</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Advanced Open Water Diver certification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Deep Diver Specialty certification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Minimum 100 logged dives</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Valid medical clearance for technical diving</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Demonstrated advanced diving skills</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Course Structure */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-ocean-900 mb-8 text-center">
                Technical Diving Course Structure
              </h2>
              <p className="text-lg text-ocean-700 mb-12 text-center">
                Progressive training from basic technical skills to advanced exploration techniques.
              </p>

              {/* Theory Phase */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-ocean-600" />
                    Technical Theory & Planning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Comprehensive theoretical foundation covering:</p>
                  <ul className="space-y-2 mb-4">
                    <li>• Decompression theory and calculations</li>
                    <li>• Mixed gas diving principles</li>
                    <li>• Technical equipment systems</li>
                    <li>• Risk assessment and emergency planning</li>
                    <li>• Environmental factors in technical diving</li>
                    <li>• Gas management and contingency planning</li>
                  </ul>
                  <p>Extensive classroom sessions prepare you for the practical challenges ahead.</p>
                </CardContent>
              </Card>

              {/* Confined Water Training */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-ocean-600" />
                    Confined Water Technical Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Technical equipment setup and configuration</li>
                    <li>• Gas switching and management procedures</li>
                    <li>• Decompression diving techniques</li>
                    <li>• Emergency procedures and problem solving</li>
                    <li>• Team communication and coordination</li>
                    <li>• Equipment malfunction simulations</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Open Water Application */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-ocean-600" />
                      Open Water Technical Dives
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Real-world application of technical diving skills:</p>
                  <ul className="space-y-1">
                    <li>• Deep decompression dives</li>
                    <li>• Wreck exploration and penetration</li>
                    <li>• Cave diving techniques (where applicable)</li>
                    <li>• Advanced navigation and positioning</li>
                    <li>• Team diving scenarios</li>
                    <li>• Technical diving certification completion</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Pro Diving */}
        <section className="py-20 bg-ocean-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-ocean-900 mb-8 text-center">
                Why Choose Pro Diving for Technical Diving Training?
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-ocean-600" />
                      Ideal Training Environment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Koh Tao's clear waters and diverse underwater features provide perfect conditions for technical diving training and practice.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-ocean-600" />
                      Technical Diving Experts
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Learn from certified technical diving instructors with extensive experience in advanced diving environments and emergency procedures.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-ocean-600" />
                      Safety-Focused Training
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Our technical courses emphasize redundant safety systems, conservative diving practices, and comprehensive emergency preparedness.</p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Button size="lg" className="bg-ocean-600 hover:bg-ocean-700">
                  Begin Technical Diving Training
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-ocean-900 mb-8 text-center">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>What makes technical diving different from recreational diving?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Technical diving involves diving beyond recreational limits, requiring specialized equipment, advanced training, and decompression procedures. It includes deeper depths, longer bottom times, and more complex environments like wrecks and caves.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Is technical diving safe?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Technical diving can be safe when properly trained and executed with redundant safety systems. However, it carries higher risks than recreational diving and requires exceptional skill, judgment, and preparation. Safety is our top priority in all technical training.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>What equipment do I need for technical diving?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Technical diving requires specialized equipment including multiple cylinders, decompression systems, advanced life support, redundant regulators, and sophisticated dive computers. We provide training on equipment configuration and use.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Can I do technical diving on Koh Tao?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>While Koh Tao offers excellent training conditions, technical diving often requires specific sites for deep wrecks or caves. We can arrange technical diving excursions to appropriate locations or focus training on available deep sites around the island.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TechnicalDivingPage;
              <h2 className="text-3xl font-bold text-ocean-900 mb-8 text-center">
                Course Overview
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      What You'll Learn
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Advanced gas management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Decompression procedures</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Mixed gas diving techniques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Cave and wreck penetration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Emergency procedures</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Course Includes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Theoretical training</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Confined water sessions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Open water dives</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Specialized equipment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Technical certification</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Prerequisites</CardTitle>
                  <CardDescription>
                    To enroll in Technical Diving courses, you must meet the following requirements:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Be at least 18 years old</li>
                    <li>• Hold current PADI Rescue Diver certification</li>
                    <li>• Have logged at least 100 dives</li>
                    <li>• Complete advanced medical examination</li>
                    <li>• Demonstrate excellent diving proficiency</li>
                    <li>• Previous experience with advanced diving</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Available Technical Courses</CardTitle>
                  <CardDescription>
                    We offer various technical diving specializations:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Trimix Diver</h4>
                      <p className="text-sm text-gray-600">Advanced mixed gas diving for depths beyond 40m</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Cave Diver</h4>
                      <p className="text-sm text-gray-600">Specialized training for cave exploration</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Wreck Diver</h4>
                      <p className="text-sm text-gray-600">Penetration diving for shipwreck exploration</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Rebreather Diver</h4>
                      <p className="text-sm text-gray-600">Closed-circuit rebreather training</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <Button size="lg" className="bg-ocean-600 hover:bg-ocean-700">
                  Contact Us to Enroll
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TechnicalDivingPage;