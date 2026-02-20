import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Waves, Users, GraduationCap, BookOpen, Target, Award, MapPin } from "lucide-react";

const InstructorPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-ocean-50 to-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Professional Course
              </Badge>
              <h1 className="text-5xl font-bold text-ocean-900 mb-6">
                PADI IDC Instructor
              </h1>
              <h2 className="text-3xl font-semibold text-ocean-700 mb-8">
                Become a PADI Instructor on Koh Tao
              </h2>
              <p className="text-xl text-ocean-700 mb-8 max-w-3xl mx-auto">
                The ultimate achievement in diving education. Become a certified PADI Instructor and share your passion
                for diving by teaching others. The PADI Instructor Development Course (IDC) is the most comprehensive
                training program in the diving industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-ocean-600" />
                  <span className="text-ocean-700">Duration: 14 days</span>
                </div>
                <div className="flex items-center gap-2">
                  <Waves className="w-5 h-5 text-ocean-600" />
                  <span className="text-ocean-700">Max depth: 40m</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-ocean-600" />
                  <span className="text-ocean-700">Contact for pricing</span>
                </div>
              </div>
              <Button size="lg" className="bg-ocean-600 hover:bg-ocean-700">
                Start Your IDC Journey
              </Button>
            </div>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-ocean-900 mb-8 text-center">
                The Pinnacle of Diving Education
              </h2>
              <div className="prose prose-lg max-w-none text-ocean-700 mb-12">
                <p className="mb-6">
                  The PADI Instructor Development Course (IDC) is the most prestigious and comprehensive training program
                  in recreational scuba diving. This intensive 14-day course transforms experienced divers into
                  professional diving educators capable of teaching all PADI courses independently.
                </p>
                <p className="mb-6">
                  During the IDC, you'll master advanced teaching techniques, develop exceptional presentation skills,
                  and learn to manage diving courses with confidence. You'll work alongside experienced PADI Course
                  Directors who will guide you through every aspect of professional diving instruction.
                </p>
                <p className="mb-6">
                  Upon completion, you'll be authorized to teach all PADI courses, from beginner Open Water to
                  professional Divemaster programs. This certification opens doors to a rewarding career in diving
                  education and professional opportunities worldwide.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-ocean-900 mb-6">Life-Changing Professional Achievement</h3>
              <div className="bg-ocean-50 p-6 rounded-lg mb-12">
                <p className="text-ocean-700">
                  Becoming a PADI Instructor represents the highest achievement in recreational diving education.
                  You'll join an elite group of professionals who share a passion for diving and a commitment to
                  safety, education, and environmental stewardship. This certification not only transforms your
                  career but also changes how you view the diving industry and your role within it.
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
                PADI IDC Course Includes
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Comprehensive Training
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Complete instructor methodology training</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Advanced presentation and teaching skills</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Course management and administration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Business operations and marketing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Professional development workshops</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>PADI Instructor certification</span>
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
                        <span>Be at least 18 years old</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Hold PADI Divemaster certification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Complete PADI Assistant Instructor course</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Minimum 100 logged dives</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Valid CPR and First Aid certification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Medical clearance for diving</span>
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
                PADI IDC Course Structure
              </h2>
              <p className="text-lg text-ocean-700 mb-12 text-center">
                The IDC consists of three integrated phases: Academic Preparation, Confined Water Training, and Open Water Training.
              </p>

              {/* Academic Phase */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-ocean-600" />
                    Academic Preparation Phase
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Comprehensive classroom and independent study covering:</p>
                  <ul className="space-y-2 mb-4">
                    <li>• PADI Instructor standards and procedures</li>
                    <li>• Teaching methodologies and presentation skills</li>
                    <li>• Course planning and administration</li>
                    <li>• Risk management and emergency procedures</li>
                    <li>• Business operations and professional development</li>
                    <li>• Environmental awareness and conservation</li>
                  </ul>
                  <p>You'll complete extensive coursework and prepare presentations for evaluation.</p>
                </CardContent>
              </Card>

              {/* Confined Water Phase */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-ocean-600" />
                    Confined Water Training Phase
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Teaching presentations and demonstrations</li>
                    <li>• Student evaluation and assessment techniques</li>
                    <li>• Confined water course management</li>
                    <li>• Problem-solving and troubleshooting</li>
                    <li>• Professional conduct and leadership</li>
                    <li>• Integration of academic knowledge with practical skills</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Open Water Phase */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-ocean-600" />
                    Open Water Training Phase
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Real-world application of instructor skills:</p>
                  <ul className="space-y-1">
                    <li>• Complete Open Water course management</li>
                    <li>• Student supervision in open water environment</li>
                    <li>• Emergency response and rescue scenarios</li>
                    <li>• Dive site management and safety procedures</li>
                    <li>• Professional certification evaluation</li>
                    <li>• Final instructor certification assessment</li>
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
                Why Choose Pro Diving for Your IDC?
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-ocean-600" />
                      World-Class Training Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Koh Tao's pristine waters and diverse marine life provide the perfect environment for comprehensive instructor training.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-ocean-600" />
                      PADI Course Directors
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Learn from certified PADI Course Directors with extensive experience in instructor training and diving education.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-ocean-600" />
                      Career Launchpad
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Your IDC certification opens doors to teaching opportunities worldwide and professional diving careers.</p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Button size="lg" className="bg-ocean-600 hover:bg-ocean-700">
                  Begin Your IDC Training
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
                    <CardTitle>What is the difference between IDC and IE?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>The IDC (Instructor Development Course) is the full 14-day course that certifies you as a PADI Instructor. The IE (Instructor Examination) is a shorter program for those who already have teaching experience and want to become PADI Instructors.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>How intensive is the IDC course?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>The IDC is very intensive, requiring full commitment for 14 days. You'll have classroom sessions, confined water training, open water training, and extensive preparation work. It's designed to ensure you're fully prepared to teach diving courses professionally.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Can I work as a diving instructor after completing IDC?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Yes, upon successful completion of the IDC, you'll be certified as a PADI Instructor and can teach all PADI courses independently. Many graduates find employment at dive centers worldwide or start their own diving businesses.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>What makes Koh Tao ideal for IDC training?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Koh Tao offers year-round excellent diving conditions, diverse marine life, multiple training sites, and a supportive diving community. The island's reputation as a diving destination provides perfect real-world training scenarios.</p>
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

export default InstructorPage;

export default InstructorPage;