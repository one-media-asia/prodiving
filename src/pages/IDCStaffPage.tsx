import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Waves, Users, Briefcase, BookOpen, Target, Award, MapPin } from "lucide-react";

const IDCStaffPage = () => {
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
                PADI IDC Staff Instructor
              </h1>
              <h2 className="text-3xl font-semibold text-ocean-700 mb-8">
                Advanced Instructor Training on Koh Tao
              </h2>
              <p className="text-xl text-ocean-700 mb-8 max-w-3xl mx-auto">
                The PADI IDC Staff Instructor course is designed for experienced instructors seeking advanced
                training and leadership roles. This prestigious certification allows you to conduct Instructor
                Development Courses and train the next generation of PADI Instructors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-ocean-600" />
                  <span className="text-ocean-700">Duration: 12-14 days</span>
                </div>
                <div className="flex items-center gap-2">
                  <Waves className="w-5 h-5 text-ocean-600" />
                  <span className="text-ocean-700">Max depth: 40m</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-ocean-600" />
                  <span className="text-ocean-700">Contact for pricing</span>
                </div>
              </div>
              <Button size="lg" className="bg-ocean-600 hover:bg-ocean-700">
                Advance Your Instructor Career
              </Button>
            </div>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-ocean-900 mb-8 text-center">
                Elite Instructor Leadership Training
              </h2>
              <div className="prose prose-lg max-w-none text-ocean-700 mb-12">
                <p className="mb-6">
                  The PADI IDC Staff Instructor certification represents the highest level of achievement in PADI's
                  professional training system. This advanced course is designed for experienced PADI Instructors
                  who want to take their teaching career to the next level by conducting Instructor Development Courses (IDC).
                </p>
                <p className="mb-6">
                  During this intensive training, you'll master advanced teaching methodologies, leadership skills,
                  and the ability to train and evaluate new PADI Instructors. You'll work closely with PADI Course
                  Directors to develop the expertise needed to conduct full IDC programs.
                </p>
                <p className="mb-6">
                  IDC Staff Instructors play a crucial role in expanding PADI's global network of professional
                  instructors. This certification opens doors to leadership positions, training center management,
                  and advanced career opportunities in the diving industry.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-ocean-900 mb-6">Leadership in Diving Education</h3>
              <div className="bg-ocean-50 p-6 rounded-lg mb-12">
                <p className="text-ocean-700">
                  As an IDC Staff Instructor, you'll become part of an elite group responsible for training the
                  next generation of diving professionals. This role requires exceptional teaching skills,
                  leadership abilities, and a deep commitment to PADI's standards of excellence. Your work
                  will directly impact the quality and safety of diving education worldwide.
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
                IDC Staff Instructor Course Includes
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
                        <span>IDC curriculum mastery and delivery</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Advanced instructor evaluation techniques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Leadership and mentoring skills</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Course administration and management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Quality assurance and standards compliance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>PADI IDC Staff Instructor certification</span>
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
                        <span>Hold current PADI Instructor certification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Minimum 18 months as active PADI Instructor</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Successfully conducted at least 2 IDC courses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Valid CPR and First Aid instructor certification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Medical clearance for professional diving</span>
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
                IDC Staff Instructor Course Structure
              </h2>
              <p className="text-lg text-ocean-700 mb-12 text-center">
                This advanced course focuses on instructor training methodologies and leadership development.
              </p>

              {/* Academic Phase */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-ocean-600" />
                    Advanced Academic Preparation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Comprehensive study of instructor training principles:</p>
                  <ul className="space-y-2 mb-4">
                    <li>• IDC curriculum design and implementation</li>
                    <li>• Advanced teaching and evaluation methodologies</li>
                    <li>• Instructor candidate assessment techniques</li>
                    <li>• Leadership and team management skills</li>
                    <li>• Quality assurance and standards maintenance</li>
                    <li>• Professional development and career advancement</li>
                  </ul>
                  <p>You'll prepare detailed presentations and demonstrate mastery of IDC procedures.</p>
                </CardContent>
              </Card>

              {/* Practical Training */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-ocean-600" />
                    Practical IDC Leadership Training
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Conducting complete IDC academic sessions</li>
                    <li>• Evaluating instructor candidate presentations</li>
                    <li>• Managing IDC confined water training phases</li>
                    <li>• Supervising open water instructor evaluations</li>
                    <li>• Quality control and standards compliance</li>
                    <li>• Leadership and team coordination exercises</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Assessment Phase */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-ocean-600" />
                    Professional Assessment & Certification
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Rigorous evaluation of your instructor training abilities:</p>
                  <ul className="space-y-1">
                    <li>• Demonstration of IDC session leadership</li>
                    <li>• Evaluation of instructor candidate performance</li>
                    <li>• Professional conduct and leadership assessment</li>
                    <li>• Mastery of PADI standards and procedures</li>
                    <li>• Final certification examination</li>
                    <li>• PADI IDC Staff Instructor certification award</li>
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
                Why Choose Pro Diving for IDC Staff Instructor Training?
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-ocean-600" />
                      Premier Training Destination
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Koh Tao's world-renowned diving environment provides the perfect setting for advanced instructor training and leadership development.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-ocean-600" />
                      Master Instructor Faculty
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Learn from PADI Master Instructors and Course Directors with extensive experience in IDC training and professional development.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-ocean-600" />
                      Career Advancement
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>IDC Staff Instructor certification opens doors to leadership roles, training center management, and advanced industry positions.</p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Button size="lg" className="bg-ocean-600 hover:bg-ocean-700">
                  Become an IDC Staff Instructor
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
                    <CardTitle>What is the role of an IDC Staff Instructor?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>IDC Staff Instructors are authorized to conduct full PADI Instructor Development Courses (IDC), training and certifying new PADI Instructors. They play a crucial role in maintaining PADI's standards of excellence in diving education.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>How does this differ from regular PADI Instructor certification?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>While PADI Instructors can teach diving courses to students, IDC Staff Instructors can teach and certify other instructors. This advanced certification requires additional experience, training, and demonstrated ability to conduct instructor-level training.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>What career opportunities are available to IDC Staff Instructors?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>IDC Staff Instructors can become dive center managers, regional training coordinators, PADI Course Directors, or work in diving education administration. Many also start their own training facilities or consulting businesses.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Is the IDC Staff Instructor course very demanding?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Yes, this is an advanced course requiring significant experience and dedication. Candidates must demonstrate exceptional teaching skills, leadership abilities, and mastery of PADI's instructor training standards.</p>
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

export default IDCStaffPage;

export default IDCStaffPage;